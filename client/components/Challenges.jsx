import React from 'react'
import { getChallenges } from '../dbApi'
import { Header, Image } from 'semantic-ui-react'

export default class Challenges extends React.Component {
  constructor() {
    super()
    this.state = {
      challenges: []
    }
  }

  componentDidMount() {
    getChallenges().then(challenges => {
      this.setState({
        challenges
      })
    })
  }

  render() {
    return (
      <div>
        <Header
          as="h2"
          icon
          textAlign="left"
          style={{ paddingTop: '1em', paddingBottom: '1em' }}
        >
          <Header.Content>Challenges</Header.Content>
        </Header>
        {this.state.challenges &&
          this.state.challenges.map(challenge => {
            return (
              <div key={challenge.title}>
                <Image src={`/images/action-types/${challenge.image}`} fluid />
                <Header
                  as="h3"
                  icon
                  textAlign="left"
                  style={{ paddingTop: '1em', paddingBottom: '1em' }}
                >
                  <Header.Content>{challenge.title}</Header.Content>
                </Header>
                <p>{challenge.description}</p>
                <h4>Karma: {challenge.karma}</h4>
              </div>
            )
          })}
      </div>
    )
  }
}
