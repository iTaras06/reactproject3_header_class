import './Header.css';
import React from 'react';

export class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src="logo192.png" className="logo-image" alt="logo" />
      </div>
    );
  }
}

export class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>HEADER</h1>
      </div>
    );
  }
}

export class Theme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light'
    };

    this.setLight = this.setLight.bind(this);
    this.setDark = this.setDark.bind(this);
  }

  setLight() {
    this.setState({ theme: 'light' });
    alert('СВЕТЛАЯ ТЕМА');
  }

  setDark() {
    this.setState({ theme: 'dark' });
    alert('ТЕМНАЯ ТЕМА');
  }
  render() {
    return (
      <div>
        <label>
          <input type="radio" name="theme"
            checked={this.state.theme == 'light'}
            onChange={this.setLight}
          /> ☀️
        </label>

        <label className="theme-option">
          <input type="radio" name="theme"
            checked={this.state.theme == 'dark'}
            onChange={this.setDark}
          /> 🌙
        </label>
      </div>
    );
  }
}

export class ButItem extends React.Component {
  render() {
    return (
      <button className="menu-button">
        {this.props.product.text}
      </button>
    );
  }
}


export class ButList extends React.Component {
  render() {
    return (
      <div className="buttons-list">
        {this.props.items.map(item => <ButItem product={item} />)}
      </div>
    );
  }
}


export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <Title />
        <Theme />
        <ButList items={this.props.items} />
      </header>
    );
  }
}


export default Header;
