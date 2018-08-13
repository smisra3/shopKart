import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = props => {
  return (
    <div className={props.class + ' product-card' || ''}>
      <p className="t-font-weight-bold">{props.productName || ''}</p>
      <p>{props.productDescription || ''}</p>
      <Link to={'/CommonData/' + props.id} className="btn btn-primary">Browse</Link>
    </div>
  );
}

export default ProductCard;