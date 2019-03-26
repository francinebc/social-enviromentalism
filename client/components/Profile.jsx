import React from 'react'
import { getUsersProfile } from '../api/dbApi'
import { Header, Image } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class Profile extends React.Component {
  constructor(props) {
    console.log('trying to construct')
    super(props)
    this.state = {
      profile: {}
    }
  }

  componentDidMount() {
    getUsersProfile()
    .then(profile => {
      this.setState({
        profile
      })
    })
  }

  render() {
    return (
      <div>
        <Header as="h2" textAlign="left" style={{ paddingTop: '1em' }}>
          <Header.Content>{this.state.profile.name}</Header.Content>
        </Header>
        <Header as="h3" textAlign="left" style={{ paddingBottom: '1em' }}>
          <Header.Content>Karma: {this.state.profile.karma}</Header.Content>
        </Header>
        {this.state.profile.actions &&
          this.state.profile.actions.map(challenge => {
            return (
              <div key={challenge.actionId}>
                <Image src={`/images/action-posts/${challenge.image}`} fluid />
                <p>{challenge.description}</p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default withRouter(Profile)