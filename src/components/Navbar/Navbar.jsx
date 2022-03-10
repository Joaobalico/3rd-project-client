import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Homepage</Link>
        <>
          <Link to="/"> Projects</Link>
          <button>Logout</button>
        </>

        <>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
    </nav>
  )
}

export default Navbar