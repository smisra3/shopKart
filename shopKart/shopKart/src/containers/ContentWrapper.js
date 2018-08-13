import React, { Component } from 'react';

import '../assests/styles/containers/ContentWrapper.css';
import AppRouting from '../routes/AppRouting';
import ErrorMessage from '../containers/ErrorMessage';

class ContentWrapper extends Component {

  render() {
    return (
      <div className="content-wrapper">
        <ErrorMessage />
        <AppRouting />
      </div>
    );
  }
}


export default ContentWrapper;