import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Grid, Container } from 'semantic-ui-react'

import Home from './Home'
import Nav from './Nav'
import FriendList from './FriendList'
import Profile from './Profile'
import Challenges from './Challenges'
import SignUp from './SignUp'
import Login from './Login'

const currentUser = "99901"

const App = () => {
  return (
    <Router>
      <div>
        <Container style={{ marginTop: '3em' }}>
          <Nav className="nav-bar" userId={currentUser}/>
          <Grid style={{ padding: '-1.5em' }}>
            <Grid.Column width={4}>
              <FriendList className="friend-list" userId={currentUser} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route exact path="/" component={Home} />
              <Route path="/challenges" component={Challenges} />
              <Route path="/profile/:userId" component={Profile} />
              {/*<Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} /> */}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </Router>
  )
}

export default App
