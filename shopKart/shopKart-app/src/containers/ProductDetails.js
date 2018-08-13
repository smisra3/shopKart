import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../assests/styles/containers/ProductDetails.css';
import ItemActionCard from '../components/ItemActionCard';

class ProductDetails extends Component {
  render() {
    const { moreInfoItem } = this.props.productDetailsState.moreInfoReducer;
    return (
      moreInfoItem.id ?
        <div className="product-details l-position-middle">
          <ItemActionCard id={moreInfoItem.id} addToCart={this.props.addToCart} removeItem={this.props.removeItemFromCart} image={moreInfoItem.image} itemName={moreInfoItem.itemName} price={moreInfoItem.price} />
        </div> : <Redirect to='/CommonData' />
    )
  }
}

const mapStateToProps = state => ({ productDetailsState: state });

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: props => {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: props
      });
    },
    addToCart: props => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: props
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);