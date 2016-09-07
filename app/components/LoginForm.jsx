const React = require('react')
const ReactDOM = require('react-dom')
const firebase = require('firebase')
let Login = require('../login')


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "" }
  }

  handleEmail (e) {
    this.setState({email: e.target.value})
  }

  handlePassword (e) {
    this.setState({password: e.target.value})
  }

  handleClick (e) {
    e.preventDefault()
    console.log("Email: " + this.state.email)
    console.log("Password: " + this.state.password)
    let email = this.state.email
    let password = this.state.password
    Login.storeUserInFirebase(email, password)

  }

  render () {
    return (
      <form className="LoginForm">
        <input  type="text"
                name="email"
                placeholder="Email Address"
                onChange={this.handleEmail.bind(this)} />
        <input  type="password"
                name="password"
                placeholder="Password"
                onChange={this.handlePassword.bind(this)} />
        <button className="login-button" onClick={this.handleClick.bind(this)}>Log In</button>
      </form>
    )
  }
}

module.exports = LoginForm
