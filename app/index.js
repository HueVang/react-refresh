var React = require('react');
var ReactDOM = require('react-dom');
var Welcome = require('./components/App');

ReactDOM.render(
  <Welcome />,
  document.getElementById('app')
);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('app'));
// }
//
// setInterval(tick, 1000);
