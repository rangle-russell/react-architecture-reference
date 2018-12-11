import { createSelector } from 'reselect';

export const productsSelector = state => state.products;
export const localeSelector = state => state.locale || 'en';
export const cartSelector = state => state.cart;
// const taxPercentSelector = state => state.tax || 0.15;

export const productsWithDiscount = createSelector(
  productsSelector,
  cartSelector,
  (products, cart) =>
    products.map(product => ({
      ...product,
      isDiscounted: true,
      price: cart.find(item => item.name === product.name)
        ? product.price
        : product.price * 0.8
    }))
);

export const productsWithLocale = createSelector(
  productsWithDiscount,
  localeSelector,
  (products, locale) =>
    products.map(product => ({
      ...product,
      price: locale === 'en' ? `$${product.price}` : `¥${product.price * 1100}`
    }))
);
