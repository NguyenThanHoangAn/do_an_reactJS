import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './dashboard.css'
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const AddUser = () => {
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
        await axios.post("/auth/registerUser", inputs)
        history.push('/adminpage')   
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
            <h2>Tạo Người Dùng Mới</h2>
            <div className="inputbox1">
            <label htmlFor="">Tên Tài Khoản</label>
             <input required  type="text"  name="username" onChange={handleChange} />
             </div>
            <div className="inputbox1">
            <label htmlFor="">Email</label>
             <input required type="email"  name="email" onChange={handleChange}  />
             </div>
             <div className="inputbox1">
             <label htmlFor="">Mật Khẩu</label>
             <input required type="password"  name="password" onChange={handleChange}  />
             </div>
             <div className="sign-in"><button type="submit" onClick={handleSubmit}>Tạo</button></div>
             </form>
             </div>
           </div>
           </div>
        </section>
        </>
        )
        

}

export default AddUser;