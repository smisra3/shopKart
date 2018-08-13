import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ItemDetailsCard from '../components/ItemDetailsCard';
import AsideNavBar from '../components/AsideNavBar';


class ProductsListing extends Component {

  componentWillMount() {
    this.props.initComponentData(this.props.location.pathname);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname)
      this.props.initComponentData(nextProps.location.pathname);
  }
  render() {
    const productItemList = this.props.state.globalReducer.productItemList,
      productsList = this.props.state.globalReducer.productsList,
      { moreInfoItem } = this.props.state.moreInfoReducer;
    if (!productItemList || !productsList)
      return null;
    const renderList = productItemList.map((element, index) => <ItemDetailsCard id={element.id} moreInfo={this.props.moreInfoHandler} addToCart={this.props.addToCartHandler} heading={element.heading} price={element.price} image={element.imgSource} description={element.itemDescription} key={index} />)
    return (
      moreInfoItem.id ? <Redirect to='/info' /> :
        <div className="row">
          <AsideNavBar list={this.props.state.globalReducer.productCardsList} />
          <div className="row col-9">{renderList}</div>
        </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return {
    addToCartHandler: props => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: props
      })
    },
    moreInfoHandler: props => {
      dispatch({
        type: 'MORE_INFO',
        payload: props
      });
    },
    initComponentData: pathname => {
      dispatch({
        type: 'INIT_COMP_DATA',
        payload: { component: 'productListing', pathname: pathname || '' }
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListing);