import React, { Component } from 'react';
import { Link } from "@reach/router";
import $ from 'jquery';

class CommonHeader extends Component {
  toggleSideMenu() {
    $('.navbar-collapse').removeClass("show");
  }
  render() {

    return (

      <header className="edu-header alc-bg-light" id="header-main">

        <nav className="navbar navbar-expand-lg">
          <div className="container">
          <Link to="/" className="navbar-brand">
                <span className="logo-text">Buy & Cart</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fa fa-bars"></span>
            </button>
           
            
            <div className="collapse navbar-collapse justify-content-start" id="mobile-navigation">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">Category</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/offers">Offers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/frenchising">Frenchising </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="mobile-navigation">
              <ul className="navbar-nav ml-4">
                
                <li className="alc-nav-item ml-4"><Link to="/signin" className="btn btn-outline-primary">Login</Link></li>
                <li className="alc-nav-item ml-2 "><Link to="/signup" className="btn btn-outline-primary ms-2">Register</Link></li>
              </ul>
            </div>
          </div>
        </nav>

      </header>

    );
  }

}

export default CommonHeader;
