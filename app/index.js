var React = require('react');
var ReactDOM = require('react-dom');
var {Clock, Toggle, Greeting} = require('./components/App');
var LoginControl = require('./components/Conditionals');

ReactDOM.render(
  <LoginControl />,
  document.getElementById('app')
);
