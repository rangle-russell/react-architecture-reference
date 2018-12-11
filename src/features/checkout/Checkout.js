import React from 'react';
import { connect } from 'react-redux';

const Checkout = ({ product }) => (
  <main className="ml4">
    <h1>Checkout</h1>
    <img
      src={product.image}
      className="db w-30 br2 br--top"
      alt={product.name}
    />
    Price: {product.price}
    <button className="mv3 db">Checkout</button>
  </main>
);

const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id]
});
export default connect(mapStateToProps)(Checkout);
