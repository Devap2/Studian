import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import "./SignUp.css"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        // sign in function
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className='sign-in-container'>
        <form onSubmit={signUp} className='sign-up-form'>
            <h1>Create An Account</h1>
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
            <button type='submit'>Sign Up</button>
            <p id='sign-up-p'>Already have an account? &nbsp; <Link to="/login" id="login-link">Login</Link></p>
            <p id='sign-up-information'>More information about your account? Click here.</p>
        </form>
    </div>
  )
}

export default SignUp;