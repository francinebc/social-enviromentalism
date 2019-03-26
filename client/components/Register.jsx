import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../actions/auth'

class Register extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    submitted: false,
    error: ""
  }

  handleChange = event => {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value;
    this.setState({
      user
    })
  }

  handleSubmit = () => {
    this.props.dispatch(register(this.state.user))
    .then(() => {
      this.setState({
        submitted: true
      })
    })
    .catch(error => {
      this.setState({
        error
      })
    })
  }

  render() {
    if(this.state.submitted) {
      return (
        <Redirect to='/'/>
      )
    }
    return (
      <div>
        <div className="ui input">
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            value={this.state.user.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            value={this.state.user.lastName}
            onChange={this.handleChange}
          />
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
        <button className="ui button" onClick={this.handleSubmit}>Sign Up</button>
      </div>
    )
  }
}

export default connect()(Register)