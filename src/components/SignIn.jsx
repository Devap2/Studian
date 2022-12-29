import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../firebase';
import "./SignIn.css";
import { Link } from 'react-router-dom';
import AuthDetails from './AuthDetails';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        // sign in function
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })

        
    }

  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn} className='login-form'>
            <h1>Log In To Your Account</h1>
            <input 

                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            ></input>
            <input 

                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}

            ></input>
            <button type='submit'>Log In</button>
            <p id='sign-up-p'>Don't have an account? &nbsp; <Link to="/sign-up" id="sign-up-link">Sign Up</Link></p>
        </form>
        <AuthDetails />
    </div>
  )
}

export default SignIn