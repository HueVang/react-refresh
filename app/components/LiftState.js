var React = require('react');

class BoilingVerdict extends React.Component {
  render() {
    if (this.props.celcius >= 100) {
      return (
        <p>The water would boil.</p>
      );
    } else {
      return (
        <p>The water would not boil.</p>
      );
    }
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
        value={temperature}
        onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius) {
  return (celcius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

console.log('tryConvert 1:', tryConvert('abc', toCelcius));
console.log('tryConvert 2:', tryConvert('10.22', toFahrenheit));


module.exports = {
  Calculator: Calculator
}
