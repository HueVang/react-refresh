var React = require('react');
var ReactDOM = require('react-dom');
var {Clock, Toggle, Greeting} = require('./components/App');
var {LoginControl, Mailbox, Page} = require('./components/Conditionals');

const messages = ['react', 're: react', 're:re: react'];
ReactDOM.render(
  <Page />,
  document.getElementById('app')
);
