var React = require('react');
var ReactDOM = require('react-dom');
var {Clock, Toggle, Greeting} = require('./components/App');
var {LoginControl, Mailbox} = require('./components/Conditionals');

const messages = ['react', 're: react', 're:re: react'];
ReactDOM.render(
  <Mailbox unreadMessages={messages}/>,
  document.getElementById('app')
);
