import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import Content from './components/Content';
import Default from './components/Default';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
// import Footer from "./components/Footer"

import "./style/style.css";


import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


function App() {
  return (
    <React.Fragment>

      <Navbar />
      <Switch>
        <Route exact path="/" component={Content} />
        {/* exact di berikan pada / pertama */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Default} />
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
