var React = require('react');
var ReactDOM = require('react-dom');
var {Clock, Toggle, Greeting} = require('./components/App');

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('app')
);
