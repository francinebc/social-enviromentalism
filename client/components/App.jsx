import React from 'react'
import { Route } from 'react-router-dom'
import { Grid, Container } from 'semantic-ui-react'

import Home from './Home'
import Nav from './Nav'
import FriendList from './FriendList'
import Profile from './Profile'
import Challenges from './Challenges'
import Register from './Register'
import Login from './Login'

const currentUser = "99901"

const App = () => {
  return (
    <div>
      <Container style={{ marginTop: '3em' }}>
        <Nav className="nav-bar" userId={currentUser}/>
        <Grid style={{ padding: '-1.5em' }}>
          {/* <Grid.Column width={4}>
            <FriendList className="friend-list" userId={currentUser} />
          </Grid.Column> */}
          <Grid.Column width={16}>
            <Route exact path="/" component={Home} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/sign-up" component={Register} />
            {/*<Route path="/login" component={Login} /> */}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default App
