const React = require('react')
const ReactDOM = require('react-dom')

class SignInButton extends React.Component {

  render () {
    return (
      <button className="login-button" onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }

}

module.exports = SignInButton
