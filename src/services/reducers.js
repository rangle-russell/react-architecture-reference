import { combineReducers } from 'redux';
import { productsReducer } from './products/reducer';

export const reducers = combineReducers({
  products: productsReducer,
  locale: () => 'en',
  cart: () => [{ name: 'Pants', price: 42.44, image: './pants.jpg' }]
});
