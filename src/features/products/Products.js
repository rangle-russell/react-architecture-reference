import React from 'react';
import { connect } from 'react-redux';

import ProductCard from './components/ProductCard';
// import * as selectors from '../../services/products/selectors';

const Products = ({ products, locale, cart }) => (
  <>
    <h1 className="ml4">Product listing </h1>
    {products.map((product, i) => (
      <ProductCard
        key={i}
        index={i}
        {...product}
        {...{ locale }}
        {...{ cart }}
      />
    ))}
  </>
);

const mapStateToProps = state => ({
  products: state.products || [],
  locale: state.locale,
  cart: state.cart
});
export default connect(mapStateToProps)(Products);
