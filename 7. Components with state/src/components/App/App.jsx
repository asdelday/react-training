import React, { Component, PropTypes } from 'react';
import './App.css';
import Navigation from '../Navigation';

export default class App extends Component {
  static navItems = [
    { id: 'search', content: 'Search' },
    { id: 'lifecycle-methods', content: 'Lifecycle Methods' },
    { id: 'contact', content: 'Contact' },
  ];

  constructor(props) {
    super(props);
    this.state = { activeNavItem: 'search', value: '' };
  }

  _onNavItemClick = (event) => {
    const id = event.target.id;
    const { activeNavItem } = this.state;

    if (id !== activeNavItem) {
      this.setState({ activeNavItem: id });
    }
  }

  _renderNavItems() {
    const navItems = App.navItems;
    const { activeNavItem } = this.state;

    return navItems.map((navItem, index) => {
      const { content, id } = navItem;
      const key = `app-nav-item-${index}`;
      const className = activeNavItem === id ? 'active' : '';

      return (
        <li key={key} className={className} id={id} onClick={this._onNavItemClick}>{content}</li>
      );
    });
  }

  render() {
    const { activeNavItem, value } = this.state;
    console.log('render App Component');

    return (
      <div className="App">
        <Navigation logo="https://facebook.github.io/react/img/logo.svg">
          {this._renderNavItems()}
        </Navigation>
        <div className="App__content">
          {activeNavItem}
          <input
            type="text"
            value={value}
            onChange={(event) => this.setState({ value: event.target.value })}
          />
          <p>{value}</p>
        </div>
      </div>
    );
  }
}
