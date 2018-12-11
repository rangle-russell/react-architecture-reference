import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Products from './features/products/Products';
import Checkout from './features/checkout/Checkout';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Products} />
          <Route path="/checkout/:id" component={Checkout} />
        </>
      </Router>
    );
  }
}

export default App;
