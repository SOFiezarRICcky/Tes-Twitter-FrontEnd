import React, { Component } from 'react'
import Comment from "../components/Comment";
import { storeProducts } from '../data';
import { ProductConsumer } from "../Context";
import axios from "axios";

export default class Content extends Component {



    render() {
        return (

            <React.Fragment>
                {/* <Slider /> */}
                <div className="container">
                    <div class="row">
                        <div className="col-md-8">
                            <div className="gambar">
                                <img src="https://pbs.twimg.com/profile_banners/63786611/1562601846/600x200" width="670px" />
                            </div>
                            <div className="adobe">
                                <img src={require("../gambar/adobe.png")} width="150px" className="adobe2" />
                            </div>
                            <div className="content-header">
                                <h5>Adobe <img src="" alt="" /></h5>
                                <span className="span">@Adobe <img src={require("../gambar/ceklis.JPG")} /></span>
                                <p>Changing the world through digital experiences. Need help? Visit us at <a href="http://helpx.adobe.com/support.html">http://helpx.adobe.com/support.html</a> or reach out to <a href="@AdobeCare">@AdobeCare</a></p>
                                <span className="span">Location All Over The World</span>
                                <Comment />
                            </div>

                        </div>
                        <div className="col-md-4">
                            <strong className="fonts mt-9">Baru Di Twitter ?</strong>
                            <p>Daftar sekarang untuk mendapatkan timeline personalisasi Anda!</p>
                            <button className="button-sidebar btn btn-primary">Daftar</button>
                            <img src={require("../gambar/sidebar.PNG")} />
                        </div>
                    </div>
                </div>

            </React.Fragment >
            // <div>
            //     <Product />
            // </div>
        )
    }
}
