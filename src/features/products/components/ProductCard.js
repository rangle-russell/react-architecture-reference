import React from 'react';
import { Link } from 'react-router-dom';
// const outfitDiscount = (cart, price, name) => {
//   return cart.find(item => item.name === name) ? price : price * 0.8;
// };

const ProductCard = ({ index, name, price, image, locale, ...rest }) => (
  <Link to={'/checkout/' + index}>
    <article className="br2 ba dark-gray b--black-10 ma4 w-100 w-50-m w-25-l mw5 dib">
      <img src={image} className="db w-100 br2 br--top" alt={name} />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{name}</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">
              {locale === 'en' ? `$${price}` : `¥${price * 1100}`}
            </h2>
          </div>
        </div>
      </div>
    </article>
  </Link>
);

export default ProductCard;
