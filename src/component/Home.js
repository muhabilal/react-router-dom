import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const navToPage = (url) => {
        navigate(url)
    }
    return (
        <div>
            <h1>Home page</h1>
            {/* <button onClick={() => navigate('/about')}>Go to About Page</button>
            <br />
            <button onClick={() => navigate('/filter')}>Go to filter Page</button> */}
            <button onClick={() => navToPage('/about')}>Go to About Page</button>
            <br />
            <button onClick={() => navToPage('/filter')}>Go to filter Page</button>
        </div>
    )
}

export default Home
