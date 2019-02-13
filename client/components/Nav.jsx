import React from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {
    
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/challenges'>Challenges</Link></li>
                    <li><Link to='/sign-up'>sign up</Link>/<Link to='/login'>login</Link></li>
                </ul>
            </div>
        )
    }
}