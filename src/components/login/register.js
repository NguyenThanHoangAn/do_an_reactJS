import React from "react";
import "./login.css";
import { Link } from "react-router-dom"




const Register = () => {

       
    return (
        
        <>
        <section>
            <div className="form-box">
            <div className="form-box2">
            <div className="form-value">
            <form action="">
            <h2>Register</h2>
            <div className="inputbox">
            <label htmlFor="">Họ và Tên</label>
             <input type="name" required />
             </div>
            <div className="inputbox">
            <label htmlFor="">Email</label>
             <input type="email" required />
             </div>
             <div className="inputbox">
             <label htmlFor="">Password</label>
             <input type="password" required />
             </div>
             <div className="inputbox">
            <label htmlFor="">Số điện thoại</label>
             <input type="Sdt" required />
             </div>
             <div className="sign-in"><button>Register</button></div>
             <div className="register">
                        <p> Have a account<t> |</t> <Link to="/login"> <a href="#">Log in</a></Link></p>
                    </div>
             </form>
             </div>
           </div>
           </div>
        </section>
        </>
        
    )
    


}

export default Register;