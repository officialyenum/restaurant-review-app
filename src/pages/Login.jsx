import React, { useState } from 'react'
import classes from './Login.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../library/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { transformAuthenticatedUser } from '../store/actions/auth.action';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('An Error Occurred');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                // Signed in 
                const user = userCredential.user;

                dispatch(transformAuthenticatedUser(user.uid));
                navigate('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
                setErrorMessage(errorMessage);
            });
    }
    return (
        <div className={classes.login}>
            <form onSubmit={handleLogin}>
                <h1>Login Page</h1>
                <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" name="password" id="password" onChange={(e) =>setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <span> {errorMessage} </span>}
            </form>
        </div>
    )
}

export default Login