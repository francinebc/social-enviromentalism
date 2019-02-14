import React from 'react'
import { getFriends } from '../dbApi'
import { Grid, Image, Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class FriendList extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    getFriends(this.props.userId).then(friends => {
      this.setState({
        friends
      })
    })
  }

  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center" style={{ paddingTop: '1em', paddingBottom: '1em' }}>
          <Header.Content>Friends</Header.Content>
        </Header>
        <Grid columns={2} divided style={{ margin: '-1.5em' }}>
          <Grid.Row>
            {this.state.friends &&
              this.state.friends.map(friend => {
                return (
                  <Grid.Column key={friend.name}>
                    <Image
                      src={`/images/users/${friend.image}`}
                      size="small"
                      centered
                      circular
                    />
                    <Container textAlign="center"><Link to={`/profile/${friend.id}`}>{friend.name}</Link></Container>
                  </Grid.Column>
                )
              })}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
