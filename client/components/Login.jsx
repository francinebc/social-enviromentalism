import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../actions/auth'

class Login extends React.Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  }

  handleChange = event => {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value;
    this.setState({
      user
    })
  }

  handleSubmit = () => {
    this.props.dispatch(login(this.state.user))
  }

  render() {
    if(this.props.loggedIn) {
      return (
        <Redirect to='/'/>
      )
    }
    return (
      <div>
        <div className="ui input">
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.user.password}
            onChange={this.handleChange}
          />
        </div>
        <button className="ui button" onClick={this.handleSubmit}>Login</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(Login)