import React from 'react'
import {getNews} from '../dbApi'
import NewsPost from './NewsPost'

export default class Home extends React.Component {
    constructor () {
        super()
        this.state = {
            news: []
        }
    }

    componentDidMount () {
        getNews()
        .then(news => {
            this.setState({
                news
            })
        })
    }

    render () {
        return (
            <div>
                {this.state.news.length > 0 && this.state.news.map(article => {
                    return <NewsPost key={article.title} article={article}/>
                })}
            </div>
        )
    }


}