import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import FriendList from './FriendList'
import Profile from './Profile'
import Challenges from './Challenges'
import SignUp from './SignUp'
import Login from './Login'

const App = () => {
  return (
    <Router>
      <div>
        <Nav className="nav-bar" />
        {/* <FriendList className="friend-list" /> */}
        <div className="contents">
          <Route exact path="/" component={Home} />
          {/* <Route path="/profile/:userId" component={Profile} />
          <Route path="/challenges" component={Challenges} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} /> */}
        </div>
      </div>
    </Router>
  )
}

export default App
