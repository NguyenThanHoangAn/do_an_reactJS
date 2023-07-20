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
            <h2>Đăng Nhập</h2>
            <div className="inputbox">
            <label htmlFor="">Email</label>
             <input type="email" required />
             </div>
             <div className="inputbox">
             <label htmlFor="">Mật Khẩu</label>
             <input type="password" required />
             </div>
             <div className="forget">
             <label htmlFor=""><input type="checkbox"/>Nhớ Mật Khẩu  <a href="#">Quên Mật Khẩu</a></label>
             </div>
             <div className="sign-in"><button>Đăng Nhập</button></div>
             <div className="register">
                        <p>Tài Khoản không tồn tại<t> |</t> <Link to="/register"><a href="#">Đăng Kí</a></Link> </p>
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