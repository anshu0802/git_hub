import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ({icon, title}) => {
      return (
      <nav className="navbar bg-primary">
        <h2><i className={icon}></i> GITHUB API</h2>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

        </ul>
      </nav>
    )  
}

Navbar.defaultProps = {
  icon: 'fab fa-github'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}


export default Navbar
