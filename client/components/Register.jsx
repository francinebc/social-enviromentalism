import React from "react"

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
    registerUser(this.state.user)
  }

  render() {
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
        <button className="ui button" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Register