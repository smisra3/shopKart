import React, { Component } from 'react';

import '../assests/styles/containers/MessageContainer.css';

class MessageContainer extends Component {
  render() {
    return(
      <div className="message-container l-position-middle l-text-align-center t-font-weight-bold">
        You have successfully logged out
      </div>
    );
  }
};

export default MessageContainer;