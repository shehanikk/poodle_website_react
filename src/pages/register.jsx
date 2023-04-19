import React from "react"
import Add from "../img/addAvatar.png"

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
            <span className="logo">POODLE</span>
            <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Display name"/>
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>
                    You do have an account? Login
                </p>
            </div>
        </div>
    )
}

export default Register