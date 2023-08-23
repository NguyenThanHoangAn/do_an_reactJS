import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import "./styte.css"
import axios from "axios";




const RegisterAdmin = () => {
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
    await axios.post("/auth/registerAdmin", inputs)
    history.push('/loginAdmin')   
    }catch(err){
        setError(err.response.data);
    }
}

    return (
        <>
        
          <section>
            <div className="form-box">
            <div className="form-box3">
            <div className="form-value-admin">
            <form action="">
            <h2>Đăng Kí</h2>
            <div className="inputbox1">
            <label htmlFor="">Tên Tài Khoản</label>
             <input type="text"  name="username" onChange={handleChange} required/>
             </div>
            <div className="inputbox1">
            <label htmlFor="">Email</label>
             <input type="email"  name="email" onChange={handleChange}  required/>
             </div>
             <div className="inputbox1">
             <label htmlFor="">Mật Khẩu</label>
             <input type="password" name="password" onChange={handleChange} required />
             </div>
             <div className="sign-in"><button onClick={handleSubmit}>Đăng Kí</button></div>
             {/* {err && <p>{err}</p>} */}
             <div className="registeradmin">
                        <p>Đã có tài khoản<t> |</t> <Link to="/loginadmin"> <a href="#">Đăng Nhập</a></Link></p>
                    </div>
             </form>
             </div>
           </div>
           </div>
        </section>
        </>
        )
        

}

export default RegisterAdmin;