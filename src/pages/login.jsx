import React from "react"

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
            <span className="logo">POODLE</span>
            <span className="title">Login</span>
                <form>
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <button>Sign in</button>
                </form>
                <p>
                    You don't have an account? Register
                </p>
            </div>
        </div>

    )
}

export default Login