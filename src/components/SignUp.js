import React, { useState } from 'react'
import {auth, db} from '../config/Config'
import { Link, useNavigate } from 'react-router-dom'

export const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const SignUp = (e) => {
        e.preventDefault();
        //console.log('form submitted');
        //console.log(name, email, password);
        auth.createUserWithEmailAndPassword(email, password).then((credentials)=>{
            db.collection('SignedUpUsersData').doc(credentials.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                navigate('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

  return (
        <div className='container'>
            <br />
            <h2>Sign Up</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={SignUp}>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="passowrd">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br />
            <span>Already have an account? Login
                <Link to="/login"> Here</Link>
            </span>
        </div>
    )
}
