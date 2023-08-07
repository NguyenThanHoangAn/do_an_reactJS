import React  from "react";
import { useState } from "react";
import "./login.css";
import { Link,useHistory} from "react-router-dom";
import axios from "axios"
import Login from "./Login";
import Header from "../../common/header/Header";




const Register = () => {
    const [inputs, setInput]= useState({
        username:"",
        email:"",
        password:"",
    })
    const [err, setError] = useState(null)

    let history = useHistory();

    const handleChange = e => {
        setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try{
        await axios.post("/auth/register", inputs)
        history.push('/login')   
        }catch(err){
            setError(err.response.data);
        }
    }

       
    return (
        
        <>
        <Header/>
        <section>
            <div className="form-box1">
            <div className="form-box2">
            <div className="form-value">
            <form action="">
            <h2>Đăng Kí</h2>
            <div className="inputbox">
            <label htmlFor="">Tên Tài Khoản</label>
             <input type="text" required name="username" onChange={handleChange} />
             </div>
            <div className="inputbox">
            <label htmlFor="">Email</label>
             <input type="email" required name="email" onChange={handleChange} />
             </div>
             <div className="inputbox">
             <label htmlFor="">Mật Khẩu</label>
             <input type="password" required name="password" onChange={handleChange} />
             </div>
             <div className="sign-in"><button onClick={handleSubmit}>Đăng Kí</button></div>
             {err && <p>{err}</p>}
             <div className="register">
                        <p>Đã có tài khoản<t> |</t> <Link to="/login"> <a href="#">Đăng Nhập</a></Link></p>
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