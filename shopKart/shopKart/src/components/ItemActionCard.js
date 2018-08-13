import React from 'react';
import { Link } from 'react-router-dom';

import '../assests/styles/components/ItemActionCard.css';

const ItemActionCard = props => {
  return (
    <div className="row item-action-card" data-id={props.id}>
      <img src={props.image} alt="french bread" height="300" width="300" className="col-4" />
      <div className="col-4 item-description l-text-align-center">
        <h3 className="t-font-weight-bold">{props.itemName}</h3>
        <span className="l-display-block l-margin-top">Category: {props.category}</span>
        <span className="l-display-block l-margin-top">Availability: In Stock</span>
        <span className="l-display-block l-margin-top t-font-weight-bold">Price: Rs {props.price}/-</span>
      </div>
      <div className="btn-container col-4">
        <span className="l-display-block t-font-weight-bold">Quantity: 0</span>
        <span className="l-display-block t-font-weight-bold">Amount: {props.price}</span>
        <button type="button" className="l-display-block btn btn-primary" onClick={() => props.addToCart(props)}>Add to cart</button>
        <button type="button" className="l-display-block btn btn-warning l-margin-top-half" onClick={() => props.removeItem(props)}>Remove from Cart</button>
        <Link to='/home' className="l-display-block btn btn-secondary l-margin-top-half">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default ItemActionCard;