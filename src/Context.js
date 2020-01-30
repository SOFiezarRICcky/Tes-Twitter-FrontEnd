import React, { Component } from 'react';

import { storeProducts, detailProduct } from "./data";

import axios from "axios";

const ProductContext = React.createContext();
// createContext agar dapat mengakses state satu ke halaman lain;
// jadi dapat di gunakan di halaman lain;

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();

    }

    setProducts = () => {
        // storeProducts.forEach(item => {
        //     const singleItem = { ...item };
        //     tempProducts = [...tempProducts, singleItem];
        //     // jika titik 3 kali maka maksudnya adalah mengambil semua data isi yang didalamnya
        // });

        axios.get("http://localhost:3004/data")
            .then((result) => {
                this.setState({
                    products: result.data
                })
            })

    }

    getItem = index => {
        const product = this.state.products.find(item => item.index === index);
        return product;
    }

    handleDetail = index => {
        const product = this.getItem(index);
        this.setState(() => {
            return { detailProduct: product }
        })
    }

    addToCart = index => {
        let tempProducts = [...this.state.products];
        const indexs = tempProducts.indexOf(this.getItem(index));
        const product = tempProducts[indexs];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
            () => {
                this.addTotals();
            }
        )
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }

    closeModal = id => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    increase = index => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.index === index)
        const indexs = tempCart.indexOf(selectedProduct);
        const product = tempCart[indexs];
        const harga = parseInt(product.price)

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        },
            () => {
                this.addTotals();
            })
    }

    decrease = index => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.index === index)
        const indexs = tempCart.indexOf(selectedProduct);
        const product = tempCart[indexs];
        const harga = parseInt(product.price)

        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(index);
        } else {
            product.total = product.count * product.price;

            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            },
                () => {
                    this.addTotals();
                })
        }
    }

    removeItem = index => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.index !== index);

        const indexs = tempProducts.indexOf(this.getItem(index));
        let removeProduct = tempProducts[indexs];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        },
            () => {
                this.setProducts();
                // mengubah status nya yang sebelumnya in cart karena sudah di hapus
                this.addTotals();
            })
    }

    addTotals = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subtotal += item.total));
        const tempTax = subtotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        // ini untuk menggunapkan menjadi desimal 2 angka
        const total = subtotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subtotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart, openModal: this.openModal, closeModal: this.closeModal,
                increase: this.increase, decrease: this.decrease,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };