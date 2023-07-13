import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import Search from '../../assets/search.svg';
import Avatar from '../../componenets/Avatar/Avatar';
import Button from '../../componenets/Button/Button';
const Navbar = () => {
  var User=null;
  return (
    <nav>
        <div className='navbar'>
            <Link>
            <img className='Nav-item nav-logo' src={logo} alt=""/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Product</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
              <input type="text" placeholder='Search...'/>
              <img src={Search} alt="" />
            </form>
            {User === null?
            <Link to='/Auth' className='nav-item nav-link'>Log-in 
            </Link>:
            <>
            <Link to='/' className=''> <Avatar>M</Avatar></Link>
            <Button>Log out</Button>
            </>
            }
        </div>
    </nav>
  )
}

export default Navbar