import React from "react"
//import { createContext, useEffect, useState } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    };


    return (
        <div className="formContainer">
            <div className="formWrapper">
            <span className="logo">POODLE</span>
            <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>
                    You don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>

    )
}

export default Login