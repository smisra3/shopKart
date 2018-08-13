import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import SignInForm from '../containers/SignInForm';
import SignUpForm from '../containers/SignUpForm';
import ProductsListing from '../containers/ProductsListing';
import ProductDetails from '../containers/ProductDetails';
import CartDetail from '../containers/CartDetail';
import MessageContainer from '../containers/MessageContainer';

class AppRouting extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" render={ () => <Redirect to="/home"/> }/>
        <Route path='/home' component={ Home } />
        <Route path='/login' component={ SignInForm } />
        <Route path='/signup' component={ SignUpForm } />
        <Route path='/CommonData' component={ ProductsListing } />
        <Route path='/info' component={ ProductDetails } />
        <Route path='/cart' render={(props) => <CartDetail props={props}/> } />
        <Route path='/logout' component = { MessageContainer } />
      </Switch>
    );
  }
};

export default AppRouting;

