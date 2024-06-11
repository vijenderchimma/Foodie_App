import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="navbar-section">
        <Link to="/" className='company-title'>Foodie</Link>
        <div className="search-bar">
            <input type='search' placeholder='search' />
        </div>
        <div className="user-authentication">
                LogIn/SignUp
        </div>
    </section>
  )
}

export default Navbar