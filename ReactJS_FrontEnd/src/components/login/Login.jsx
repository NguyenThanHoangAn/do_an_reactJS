import { useContext, useEffect, useState } from "react";
import React  from "react";
import "./login.css"
import { Link, useHistory} from "react-router-dom"
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";


const Login = () => {
  const [inputs, setInput]= useState({
    username:"",
    password:"",
    
})


const [err, setError] = useState(null)

const history = useHistory();

const {login} = useContext(AuthContext);


const handleChange = e => {
    setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async e => {
    e.preventDefault()
    
    try{
       
    await login(inputs)
    history.push('/')

    }catch(err){
        setError(err.response.data);
    }
    
}
    return (
        <>
        <Header/>
          <section className="#">
            <div className="form-box1">
            <div className="form-box2">
            <div className="form-value">
            <form action="">
            <h2>Đăng Nhập</h2>
            <div className="inputbox">
            <label htmlFor="">Tên Đăng Nhập</label>
             <input type="name" required name="username" onChange={handleChange} />
             </div>
             <div className="inputbox">
             <label htmlFor="">Mật Khẩu</label>
             <input type="password" required name="password" onChange={handleChange} />
             </div>
             <div className="forget">
             <label htmlFor=""><input type="checkbox"/>Nhớ Mật Khẩu  <a href="#">Quên Mật Khẩu</a></label>
             </div>
             <div className="sign-in"><button onClick={handleSubmit}>Đăng Nhập</button></div>
             {err && <p>{err}</p>}
             <div className="register">
                        <p>Chưa Có Tài Khoản <t> |</t> <Link to="/register"><a href="#">Đăng Kí</a></Link> </p>
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