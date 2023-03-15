import React, { useState } from "react";
import classes from "./Register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../library/firebase";
import { useDispatch } from "react-redux";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { transformAuthenticatedUser } from "../store/actions/auth.action";
import { ActivityIndicator } from "../components/Feedback";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("An Error Occurred");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    setLoading(true);
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
        setLoading(false);
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 5000);
      });
  };

  const createUser = async (user) => {
    // Add a new document in collection "cities"
    const newUser = await setDoc(doc(db, "users", user.uid), {
      fullName: name,
      username: username,
      email: email,
      timeStamp: serverTimestamp(),
    });
    // console.log(newUser);
    dispatch(transformAuthenticatedUser(user.uid));
    navigate("/");
  };
  return (
    <div className={classes.register}>
      <form onSubmit={handleRegister}>
        <h1>Create an account</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className={loading === true ? classes.loading : ""}
          disabled={loading}
        >
          {loading ? <ActivityIndicator /> : "Create Account"}
        </button>
        {error && <span> {errorMessage} </span>}
      </form>
    </div>
  );
};

export default Register;
