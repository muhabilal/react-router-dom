import React from 'react'

function Login() {
    const login = () => {
        localStorage.getItem('login', true)
    }
    return (
        <div>
            <h1>Login Page</h1>

            <input type={'text'} />
            <br />
            <input type={'text'} />
            <br />
            <button onClick={() => login}>Login</button>
        </div>
    )
}

export default Login
