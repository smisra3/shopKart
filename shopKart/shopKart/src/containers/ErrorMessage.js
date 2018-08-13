import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorMessage extends Component {
  render() {
    let errorMsgList = [],
      errorMessagesReducer = this.props.state.errorMessagesReducer;
    errorMsgList = errorMessagesReducer.map((element, index) => <p className="l-margin-top" key={index}>{element}</p>)
    return (
      <div className={errorMessagesReducer.length ? "alert alert-danger t-font-weight-bold l-position-middle l-text-align-center" : 'is-hidden'}>
        {errorMsgList}
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(ErrorMessage);