import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import { ButtonContainer } from "./Button";
import logo from '../logo.svg'

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        if (token) {
            const decoded = jwt_decode(token)
            this.setState({
                email: decoded.email,
                password: decoded.password,
                submit: true,
            })
            console.log(decoded);

        }
    }


    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {

        const loginRegLink = (
            <div>
                <div class="daftar">
                    <Link to="/register" class="border btn btn-outline-primary" >Daftar</Link>
                </div>
                <div class="masuk">
                    <Link to="/login" class="border btn btn-outline-primary" >Masuk</Link>
                </div>
            </div>
        )

        const userLink = (
            <div>
                <div class="daftar">
                    <Link to="/profile" class="border btn btn-outline-primary" >{this.state.email}</Link>
                </div>
                <div class="masuk">
                    <Link to="" onClick={this.logOut.bind(this)} class="border btn btn-outline-primary" >Log Out</Link>
                </div>
            </div>
        )


        return (
            <nav className="container navbar navbar-expand-lg navbar-primary bg-dark rounded sticky-top">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <Link class="nav-link" to="/"  >
                                <i class="fab fa-twitter"></i>
                            </Link>
                        </li>
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                        <input class="masukan form-control mr-sm-2" type="text" placeholder="Cari di Twitter"></input>
                    </form>

                    {localStorage.usertoken ? userLink : loginRegLink}

                    <div class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                    </div>

                </div>
            </nav>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`;

export default withRouter(Navbar)