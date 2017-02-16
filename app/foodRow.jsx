const React = require('react')
const ReactDOM = require('react-dom')

class FoodRow extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.calories}</td>
        <td><a href="#" className="remove-row" onClick={this.props.removeSelf}>⛔️</a></td>
      </tr>
    )
  }
}

module.exports = FoodRow
