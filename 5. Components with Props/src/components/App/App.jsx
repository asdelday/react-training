import React, { Component, PropTypes } from 'react';
import './App.css';

export default class App extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Hello World!! This is My First React Component',
  };

  render() {
    const { text } = this.props;

    return (
      <div className="App">
        {text}
      </div>
    );
  }
}
