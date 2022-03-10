import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Homepage</Link>
        <>
          <Link to="/"> Projects</Link>
          <button onClick={logoutUser}>Logout</button>
        </>

      {!loggedIn && (
        <>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
      )}

      <button onClick={toggleTheme}>Change to {theme === 'light' ? 'dark' : 'light'} </button>
    </nav>
  )
}

export default Navbar