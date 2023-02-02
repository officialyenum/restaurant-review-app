import React, { useState } from 'react'
import classes from './Register.module.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../library/firebase';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/auth.slice';
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('An Error Occurred');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                createUser(user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
                setErrorMessage(errorMessage);
            });
    }

    const createUser = async (user) => {
        // Add a new document in collection "cities"
        const newUser = await setDoc(doc(db, "users", user.uid), {
            fullName: name,
            username: username,
            email: email,
            timeStamp: serverTimestamp(),
        });
        dispatch(authActions.authenticateUser(newUser))
        navigate('/');
    }
    return (
        <div className={classes.register}>
            <form onSubmit={handleRegister}>
                <h1>Register Page</h1>
                <input type="text" name="username" id="username" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
                <input type="text" name="name" id="name" placeholder='Full Name' onChange={(e)=>setName(e.target.value)} />
                <input type="email" name="email" id="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" name="password" id="password" placeholder='Password' onChange={(e) =>setPassword(e.target.value)} />
                <button type="submit">Register</button>
                {error && <span> {errorMessage} </span>}
            </form>
        </div>
    )
}

export default Register