var React = require('react');

// function Welcome(props) {
//   return <h1>Hello, {props.name}.</h1>;
// }

class Welcome extends React.Component{
  render() {
    return <h1>Hello, {this.props.name}.</h1>;
  }
}

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


// function App(props) {
//   return (
//     <div>
//       <Welcome name="Ted" />
//       <Welcome name="Jack" />
//       <Welcome name="Huey" />
//     </div>
//   );
// }

class App extends React.Component{
  render() {
    return (
      <div>
        <Welcome name="Ted" />
        <Welcome name="Jack" />
        <Welcome name="Huey" />
      </div>
    );
  }
}

module.exports = Clock;
