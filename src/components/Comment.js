import React, { Component, Fragment } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Comment extends Component {
    render() {
        return (
            <Fragment>

                <div>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Tweets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tweets & replies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Likes</a>
                        </li>

                    </ul>
                </div>
                <div class="row">
                    <div class="col-sm-1,5">
                        <img className="rounded-circle cmnprofile" src={require('../gambar/profile.png')} alt="" />
                    </div>
                    <div class="col-sm-10 comment">
                        <h5>Adobe @Adobe. 1h</h5>
                        <p>Climate action has never been more important, & the days of acting alone are over. We’re proud to join
@CeresNews
 & peer companies to call on leaders in California, Oregon & Washington to reduce emissions through cap-and-invest programs.</p>
                        <img className="gambar-comment rounded" src={require('../gambar/gambar-coment.jfif')} alt="" />
                        <div class="row">
                            <div class="col liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../icon/komentar.PNG')} alt="" />
                                </button>
                            </div>
                            <div class="col liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../icon/reload.PNG')} alt="" />
                                </button>
                            </div>
                            <div class="col liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../icon/like.PNG')} alt="" />
                                </button>
                            </div>
                            <div class="col liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../icon/upload.PNG')} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="row modalcnt">
                                    <div class="col ">

                                        <h5 className="mb-1"><img className="rounded-circle cmnprofile" src={require('../gambar/profile.png')} alt="" />Adobe @Adobe. 1h</h5>
                                        <p className="mb-1">Climate action has never been more important, & the days of acting alone are over. We’re proud to join
                                                            @CeresNews
                                                            & peer companies to call on leaders in California, Oregon & Washington to reduce emissions through cap-and-invest programs.</p>

                                        <form>
                                            <div class="form-group">
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </form>
                                        <button class="btn btn-block btn-primary rounded-pill">Balas</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="row modalcnt">
                                    <div class="col text-center">
                                        <img src={require('../icon/modalimg.PNG')} alt="" />
                                        <h5>Reply to join the conversation</h5>
                                        <p>Once you join Twitter, you can respond to Adobe's Tweet</p>
                                        <button class="btn btn-block btn-primary rounded-pill">Log in</button>
                                        <button class="btn btn-block btn-outline-primary rounded-pill">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}

export default Comment;