export const PRODUCTS = 'UI-PRODUCTS';

export function setProducts(payload) {
  return {
    type: PRODUCTS,
    payload
  };
}
