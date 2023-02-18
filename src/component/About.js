import React from 'react'
import { Link } from 'react-router-dom'
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <li> <Link to={'/user/bilal'} state={{ name: 'bilal dar' }}>bilal</Link></li>
            <li> <Link to={'/user/zohaib'}>zohaib</Link></li>
        </div>
    )
}

export default About
