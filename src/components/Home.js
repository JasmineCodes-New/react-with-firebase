import React, { useEffect } from 'react'
import '../index.css'
import { Navbar } from './Navbar';
import { Products } from './Products';
import { auth } from '../config/Config';
import { useNavigate } from 'react-router-dom';

export const Home = ({user}) => {

  const navigate = useNavigate();

  useEffect(() => {
        // forcing user to login or signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                navigate('/login');
            }
        })
    })

  return (
    <div className='wrapper'>
        <Navbar user = {user}/>
        <Products />
    </div>
  )
}
