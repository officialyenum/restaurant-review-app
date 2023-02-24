import React, { useState } from "react";
import classes from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../library/firebase";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { transformAuthenticatedUser } from "../store/actions/auth.action";
import { ActivityIndicator } from "../components/Feedback";

const Login = () => {
  const [params] = useSearchParams();
  const refId = params.get("ref");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("An Error Occurred");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch(transformAuthenticatedUser(user.uid));
        setTimeout(() => {
          setLoading(false);
          if (refId) {
            navigate(refId);
          } else {
            navigate("/");
          }
        }, 2000);
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
  return (
    <div className={classes.login}>
      <form onSubmit={handleLogin}>
        <h1>Login To your account</h1>
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
        {error && <span> {errorMessage} </span>}
        <button
          type="submit"
          className={loading === true ? classes.loading : ""}
          disabled={loading}
        >
          {loading ? <ActivityIndicator /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
