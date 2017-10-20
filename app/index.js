var React = require('react');
var ReactDOM = require('react-dom');
var {Clock, Toggle, Greeting} = require('./components/App');
var {LoginControl, Mailbox, Page} = require('./components/Conditionals');
var {NumberList} = require('./components/ListAndKeys');
var {NameForm, Essay} = require('./components/Forms');

const messages = ['react', 're: react', 're:re: react'];
const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <Essay />,
  document.getElementById('app')
);
