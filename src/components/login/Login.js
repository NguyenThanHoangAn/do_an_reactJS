import React from "react";
import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
          <section className="#">
            <div className="form-box">
            <div className="form-box2">
            <div className="form-value">
            <form action="">
            <h2>Login</h2>
            <div className="inputbox">
            <label htmlFor="">Email</label>
             <input type="email" required />
             </div>
             <div className="inputbox">
             <label htmlFor="">Password</label>
             <input type="password" required />
             </div>
             <div className="forget">
             <label htmlFor=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
             </div>
             <div className="sign-in"><button>Log in</button></div>
             <div className="register">
                        <p>Don't have a account<t> |</t> <Link to="/register"><a href="#">Register</a></Link> </p>
                    </div>
             </form>
             </div>
           </div>
           </div>
        </section>

        </>
    )
}
export default Login;