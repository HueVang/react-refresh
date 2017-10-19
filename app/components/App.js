var React = require('react');

// Written in old way before ES6
// function Welcome(props) {
//   return <h1>Hello, {props.name}.</h1>;
// }

// Written in most recent way ES6
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

// Practice using lifecycle hooks and states
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

// Practice using props
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

// Practice handling events with more states
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }

}

// Practice with conditional rendering
class GuestGreeting extends React.Component{
  render() {
    return <h1>Please sign up!</h1>
  }
}

class UserGreeting extends React.Component{
  render() {
    return <h1>Welcome back!</h1>
  }
}

class Greeting extends React.Component{
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }
}

module.exports = {
  Clock: Clock,
  Toggle: Toggle,
  Greeting: Greeting
};
