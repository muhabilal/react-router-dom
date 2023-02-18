import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

function User() {
    const { id } = useParams();
    console.log(id)
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>This is {id} page.</h1>
        </div>
    )
}

export default User
