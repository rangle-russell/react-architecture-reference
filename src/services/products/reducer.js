import * as actions from './actions';

export const PRODUCTS_INITIAL_STATE = [
  { name: 'Dress', price: 22.44, image: '/dress.jpg' },
  { name: 'Longsleeve', price: 32.44, image: '/longsleeve.jpg' },
  { name: 'Pants', price: 42.44, image: '/pants.jpg' },
  { name: 'Shirt', price: 12.44, image: '/shirt.jpg' },
  { name: 'Sweater', price: 22.44, image: '/sweater.jpg' }
];

export function productsReducer(state = PRODUCTS_INITIAL_STATE, action) {
  switch (action.type) {
    case actions.PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
