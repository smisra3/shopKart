import React from 'react';

import '../assests/styles/components/ItemDetailsCard.css'

const ItemDetailsCard = props => {
  return (
    <div className="item-details-card col-4" data-id={props.id || ''}>
      <p className="card-heading l-padding-half l-text-align-center">{props.heading || ''}</p>
      <img alt="" src={props.image || ''} height="170" width="170" className="l-position-middle" />
      <p className="l-text-align-center t-font-weight-bold">Price: Rs {props.price || ''}/-</p>
      <div className="l-position-middle l-text-align-center">
        <button onClick={() => props.addToCart(props)} className="btn btn-primary">Add To Cart</button>
        <button onClick={() => props.moreInfo(props)} className="btn btn-secondary">More Info</button>
      </div>
      <p className="l-padding-half l-text-align-center l-margin-top-half">{props.description || ''}</p>
    </div>
  );
};

export default ItemDetailsCard;