import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assests/styles/containers/Home.css';
import ProductCard from '../components/ProductCard';
import AppCarousel from '../components/AppCarousel';

class Home extends Component {

  componentDidMount() {
    this.props.initComponentData();
  }
  render() {
    if (!this.props.HomeState.globalReducer.productCardsList)
      return null;
    const { globalReducer } = this.props.HomeState,
      renderList = globalReducer.productCardsList.map((element, index) => <ProductCard name={element.name} id={element.id} key={index} class={element.class} productName={element.productName} productDescription={element.productDescription} />);
    return (
      <div className="home row" location={this.props.location}>
        <AppCarousel />
        {renderList}
      </div>
    )
  }
}

const mapStateToProps = state => ({ HomeState: state });

const mapDispatchToProps = dispatch => {
  return {
    initComponentData: () => dispatch({ type: 'INIT_COMP_DATA', payload: { component: 'home' } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);