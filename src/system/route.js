import React from 'react';
import { Router, Link } from "@reach/router"


import Home from '../home';
import Productlist from '../product/product_list';
import About from '../pages/about';
const rootRoute = (
  <Router>
    <Home path="/" />
    <Productlist path="/products" />
    <About path="/about" />
    
  </Router>

);

export default rootRoute;
