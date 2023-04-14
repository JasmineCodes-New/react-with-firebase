import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/Config'
import logo from '../images/ecommerce.svg'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'

export const Navbar = ({user}) => {

  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    })
  }

  return (
    <div className='navbox'>
      <div className='leftside'>
        <img src={logo} alt=''/>
      </div>
      {!user && <div className='rightside'>
        <Link to='signup' className='navlinks'>SIGN UP</Link>
        <Link to='login' className='navlinks'>LOGIN</Link>
      </div>}
      {user && <div className='rightside'>
        <span><Link to="/" className='navlink'>{user}</Link></span>
        <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
        <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
      </div>}
    </div>
  )
}

