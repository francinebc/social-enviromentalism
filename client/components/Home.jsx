import React from 'react'
import { getSubreddit } from '../api/reddit'
import NewsPost from './NewsPost'
import { Header } from 'semantic-ui-react'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    getSubreddit().then(news => {
      this.setState({
        news
      })
    })
  }

  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="left" style={{ paddingTop: '1em', paddingBottom: '1em' }}>
          <Header.Content>Recent Environmental News</Header.Content>
        </Header>
        {this.state.news.length > 0 &&
          this.state.news.map(article => {
            return <NewsPost key={article.title} article={article} />
          })}
      </div>
    )
  }
}
