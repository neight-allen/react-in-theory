const React = require('react')
const ReactDOM = require('react-dom')

class ActionButton extends React.Component {
  render () {
    return (
      <button id={this.props.id} className="ActionButton" onClick={this.props.handleClick}>
        <span>{this.props.text}</span>
      </button>
    )
  }
}

module.exports = ActionButton
