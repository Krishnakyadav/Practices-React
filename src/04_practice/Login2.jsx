import React from 'react'

const Login2 = () => {
  return (
    <form >
        <h1>Login Page2</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='Enter Email'/><br/><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' placeholder='Enter Password'/>
    </form>
  )
}

export default Login2