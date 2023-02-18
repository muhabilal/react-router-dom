import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div>
            <h1>404 page</h1>
            <h1>This url is not present</h1>
            <Link to={'/'}>go to home page</Link>
        </div>
    )
}

export default Page404
