import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <h1>This is {id} page.</h1>
        </div>
    )
}

export default User
