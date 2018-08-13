import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assests/styles/containers/Footer.css';
import LinkItems from '../components/LinkItems';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.FOOTER_CLASSES = {};
    this.FOOTER_CLASSES.LIST_ITEM_WRAPPER = {
      class: "l-display-inline-block col-2",
      listItems: {
        class: "l-padding-bottom-half"
      }
    };
  }
  render() {
    return (
      <footer className="">
        <LinkItems items={this.props.footerState.globalReducer.footerLinks.about} listItemsWrapper={this.FOOTER_CLASSES.LIST_ITEM_WRAPPER} />
        <LinkItems items={this.props.footerState.globalReducer.footerLinks.services} listItemsWrapper={this.FOOTER_CLASSES.LIST_ITEM_WRAPPER} />
        <p className="t-font-weight-bold l-display-inline-block l-margin-left-triple clearfix">{this.props.footerState.globalReducer.footerLinks.companyName}</p>
      </footer>
    );
  }
}

const mapStateToProps = state => ({ footerState: state })

export default connect(mapStateToProps)(Footer);