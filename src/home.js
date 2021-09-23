import React, { Component } from 'react';
import { Link } from "@reach/router";
var ReactRotatingText = require('react-rotating-text');
class CommonHome extends Component {

  render() {
    return (
      <div className="common-home">

        <div className="first-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="first-section-content text-center cm-frm">

                  <h2 className="wow bounceIn  animated slide-text" style={{'visibility': 'visible','-webkit-animation-delay': '0.6s','-moz-animation-delay': '0.6s', 'animation-delay': '0.6s','animation-delay': '0.6s'}}>  Buy & Cart App Help in  <ReactRotatingText
                  items={['Advertising' ,'Shopping', 'Marketing']}
                  pause={1500}
                  className="text-warning"
                  emptyPause={1000}
                  typingInterval={100}
                  deletingInterval={100}
                  />
                </h2>
                      <Link to="/register"  className="btn btn-outline-primary text-white btn-slide" >Register Now!</Link>
                    <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="services-area bg ptb-100 text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="section-title">
                        <h3>We provide best services!</h3>
                        <p className="hidden-lg-down">We enjoy adapting our strategies to offer every customer the best solutions that are at the forefront of the industry.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-6">
                      <div className="single-services">
                          <div className="icon">
                          <i className="icon-logo fa fa-shopping-cart"></i>
                              
                          </div>
                          <h3>Shopping</h3>
                          <p className="hidden-lg-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="single-services">
                            <div className="icon">
                            <i className="icon-logo fa fa-shopping-cart"></i>
                            </div>
                            <h3>Offer % </h3>
                            <p className="hidden-lg-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="single-services">
                            <div className="icon">
                            <i className="icon-logo fa fa-shopping-cart"></i>
                            </div>
                            <h3>Reward</h3>
                          <p className="hidden-lg-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                      <div className="single-services">
                          <div className="icon">
                          <i className="icon-logo fa fa-shopping-cart"></i>
                          </div>
                          <h3>Wallet</h3>
                          <p className="hidden-lg-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="single-services">
                            <div className="icon">
                            <i className="icon-logo fa fa-shopping-cart"></i>
                            </div>
                            <h3>Promotion</h3>
                            <p className="hidden-lg-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="single-services">
                            <div className="icon">
                            <i className="icon-logo fa fa-shopping-cart"></i>
                            </div>
                            <h3>Wishlist</h3>
                            <p className="hidden-lg-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default CommonHome;
