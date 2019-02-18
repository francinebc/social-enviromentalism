import React from 'react'

export default class NewsPost extends React.Component {
    render () {
        return (
            <div>
                <a href={this.props.article.url}>{this.props.article.title}</a>
            </div>
        )
    }
}