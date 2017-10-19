// import React from 'react';
// import {Greeting} from './App';
var React = require('react');
var {Greeting} = require('./App');

// Practicing conditionals if statements
class LoginButton extends React.Component{
  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}

class LogoutButton extends React.Component{
  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout
      </button>
    );
  }
}

class LoginControl extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

// Practicing conditionals 'inline if with logical "&&" operator'
class Mailbox extends React.Component{
  render() {
    const unreadMessages = this.props.unreadMessages;
    return (
      <div>
        <h1>Hello</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    )
  }
}

module.exports = {
  LoginControl: LoginControl,
  Mailbox: Mailbox
};
