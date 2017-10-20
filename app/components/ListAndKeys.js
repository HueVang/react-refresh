var React = require('react');

// Pre-ES6 way of writing a component
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//      {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// ES6 Way of writing a component
class NumberList extends React.Component{
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );

    return (
        <ul>{listItems}</ul>
    );
  }
}

module.exports = {
  NumberList: NumberList
};
