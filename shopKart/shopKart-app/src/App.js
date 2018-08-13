import React, { Component } from 'react';

import './App.css';
import Header from './containers/Header';
import ContentWrapper from './containers/ContentWrapper';
import Footer from './containers/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ContentWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
