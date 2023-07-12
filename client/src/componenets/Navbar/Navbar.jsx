import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <nav>
        <div className='navbar'>
            <Link>
            <img src={logo}/>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar