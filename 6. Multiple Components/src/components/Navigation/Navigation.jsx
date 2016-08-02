import React, { Component, PropTypes } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
  static propTypes = {
    children: PropTypes.node,
    logo: PropTypes.string,
  }

  render() {
    const { children, logo } = this.props;

    return (
      <nav className="Navigation">
        {(logo || null) && <img src={logo} alt="logo" className="Navigation__logo"/>}
        {children}
      </nav>
    );
  }
}
