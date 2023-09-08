import React from "react";
import './dashboard.css'
import axios from "axios";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";



const UpdateUser = () => {
    const [user, setUser] = useState({
        username: "",
        email:"",
        password:"",
      });
      const [error,setError] = useState(false)
    
      const location = useLocation();
      const history = useHistory();
    
      const userId = location.pathname.split("/")[2];
    
      const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await axios.put(`http://localhost:8800/api/auth/user1/`+ userId, user);
          history.push("/adminpage");
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };
    

    return (
        <>
         <section>
            <div className="form-box">
            <div className="form-box3">
            <div className="form-value-admin">
            <form action="">
            <h2>Update user</h2>
            <div className="inputbox1">
            <label htmlFor="">Tên Tài Khoản</label>
             <input required  type="text"  name="username" onChange={handleChange} />
             </div>
            <div className="inputbox1">
            <label htmlFor="">Email</label>
             <input required type="email"  name="email" onChange={handleChange} />
             </div>
             <div className="inputbox1">
             <label htmlFor="">Mật Khẩu</label>
             <input required type="password"  name="password" onChange={handleChange} />
             </div>
             {error && "Something went wrong!"}
             <div className="sign-in"><button type="submit" onClick={handleClick}>Update</button></div>
             </form>

             <div><Link to="/adminpage"><button className="div-back">Quay Lại</button></Link></div>
             </div>
           </div>
           </div>
        </section>
        </>
        )
        

}

export default UpdateUser;