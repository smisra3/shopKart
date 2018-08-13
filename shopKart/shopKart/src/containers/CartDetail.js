import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../assests/styles/containers/CartDetail.css';
import CartTable from '../components/CartTable';

class CartDetail extends Component {
  render() {
    const { cartTotal } = JSON.parse(window.sessionStorage.getItem('cartList')).cartDetails;
    return (
      <div className="cart-detail row l-position-middle">
        <CartTable tableData={JSON.parse(window.sessionStorage.getItem('cartList'))} />
        <div className="btn-container col-7">
          <p className="t-font-weight-bold l-text-align-center">Total: Rs {cartTotal ? cartTotal : 0}/-</p>
          <button type="button" className="btn btn-primary l-position-middle l-display-block">Checkout</button>
          <Link to='/home' className="btn btn-warning l-position-middle l-margin-top l-display-block" >Continue Shopping</Link>
          <button type="button" className="btn btn-danger l-position-middle l-margin-top l-display-block" onClick={() => this.props.clearShoppingCart()}>Clear Cart</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ cartDetailState: state });

const mapDispatchToProps = dispatch => {
  return {
    clearShoppingCart: () => {
      dispatch({
        type: 'CLEAR_CART'
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
