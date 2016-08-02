import React, { Component, PropTypes } from 'react';
import './App.css';
import Navigation from '../Navigation';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation logo="https://facebook.github.io/react/img/logo.svg">
          <li className="active">Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
        </Navigation>
        <div className="App__content">
          Here is my content!
        </div>
      </div>
    );
  }
}
