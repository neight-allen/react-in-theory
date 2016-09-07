const React = require('react')
const ReactDOM = require('react-dom')
const LikesCounter = require('./LikesCounter')
const LoginForm = require('./LoginForm')

class App extends React.Component {

  render () {
    return (
      <div>
        <LikesCounter initialCount={0}/>
        <LoginForm />
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('application'))
