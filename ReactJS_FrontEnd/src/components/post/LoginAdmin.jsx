import React  from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./styte.css"


const LoginAdmin = () => {
  const [inputs, setInput]= useState({
    username:"",
    password:"",
    
})


const [err, setError] = useState(null)

const history = useHistory();

// const {login} = useContext(AuthContext);


const handleChange = e => {
    setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async e => {
    e.preventDefault()
    
    try{
       
      await axios.post("/auth/loginAdmin", inputs)
      localStorage.setItem("accessToken" , true)
    history.push('/adminpage')

    }catch(err){
        setError(err.response.data);
    }
    
}
    return (
        <>
        
          <section >
            <div className="form-box">
            <div className="form-box3">
            <div className="form-value-admin">
            <form action="">
            <h2>Đăng Nhập</h2>
            <div className="inputbox1">
            <label htmlFor="">Tên Đăng Nhập</label>
             <input type="name" required name="username" onChange={handleChange} />
             </div>
             <div className="inputbox1">
             <label htmlFor="">Mật Khẩu</label>
             <input type="password" required name="password" onChange={handleChange}  />
             </div>
             <div className="forget1">
             <label htmlFor=""><input type="checkbox"/>Nhớ Mật Khẩu  <a href="#">Quên Mật Khẩu</a></label>
             </div>
             <div className="sign-in"><button type="submit" onClick={handleSubmit}>Đăng Nhập</button></div>
             {err && <p>{err}</p>}
             <div className="registeradmin">
                        <p>Chưa Có Tài Khoản <t> |</t> <Link to="/registeradmin"><a href="#">Đăng Kí</a></Link> </p>
                    </div>
             </form>
             </div>
           </div>
           </div>
        </section>
        </>
        )
        

}

export default LoginAdmin;