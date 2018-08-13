import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../assests/styles/containers/Header.css';
import LinkItems from '../components/LinkItems';

class Header extends Component {
  constructor(props) {
    super(props);
    this.COMPONENT_CLASSES = {};
    this.COMPONENT_CLASSES.LIST_ITEM_WRAPPER = {
      class: "l-display-inline-block l-margin",
      listItems: {
        class: "l-display-inline-block l-padding"
      }
    };
    this.COMPONENT_CLASSES.SIGN_IN_LINK = {
      text: "Sign In",
      class: "l-margin l-float-right clearfix",
      title: "sign in",
      href: "/login"
    };
    this.COMPONENT_CLASSES.SIGN_UP_LINK = {
      text: "Sign Up",
      class: "l-margin l-float-right clearfix",
      title: "sign up",
      href: "/signup"
    }
  }

  render() {
    let activeUser,
      { globalReducer } = this.props.HeaderState,
      { cartReducer } = this.props.HeaderState;

    if (window.sessionStorage.getItem('userProfile')) {
      activeUser = <span><Link onClick={(event) => this.props.logoutHandler(event)} to="#" className="l-margin-left l-float-right clearfix l-margin-top sign-out-link">Sign Out</Link><span className="l-float-right clearfix l-margin-top-double t-font-weight-bold">{globalReducer.userProfile.userName || JSON.parse(window.sessionStorage.getItem('userProfile')).userName}</span></span>;
    } else {
      activeUser = <span><Link to="/login" className="l-margin l-float-right clearfix">Sign In</Link><Link to="/signup" className="l-margin l-float-right clearfix">Sign Up</Link></span>;
    }
    return (
      <header className="header">
        <em className="fas fa-shopping-cart"></em>
        <span className="welcome-text">ShopKart</span>
        <LinkItems listItemsWrapper={this.COMPONENT_CLASSES.LIST_ITEM_WRAPPER} items={globalReducer.navItemLinks} />
        <span className="cart-count t-font-weight-bold">( {cartReducer.cartDetails.cartItems.length}   )</span>
        {activeUser}
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    HeaderState: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: event => {
      event.preventDefault();
      dispatch({
        type: 'LOGOUT_USER'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);