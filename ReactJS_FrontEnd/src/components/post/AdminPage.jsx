import React, { useEffect, useState} from "react";
import "./dashboard.css"
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


const AdminPage = () => {
  const [data, setData] = useState([])
  const history = useHistory();
  useEffect(() => {
    const readDatas = async () => {
        try {
            const res = await axios.get("http://localhost:8800/api/auth/getEmployees");
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
     readDatas();
  }, [])

  const handleDelete = async (id)=> {
    try {
      await axios.delete("http://localhost:8800/api/auth/user/"+id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = () => {
    axios.post('http://localhost:8800/api/auth/logoutAdmin')
    .then(res => {
      localStorage.removeItem("token")
      history.push('/loginadmin') 
    }).catch(err => console.log(err));
  }
    return (
        <>
        <div className="box1">
      <ul className="ultrong">
        <li><a >Manager User</a></li>
        <Link to="/managerproduct"><li><a >Manager Product</a></li></Link>
        <Link to="/tableproduct"><li><a>Table Product</a></li></Link>
         <li onClick={handleLogout}><a>Logout</a></li>
</ul>
</div>

    <div className="box2">
        <div className="divadmin">
            Hello, Admin
        </div>
       <div className="divbox2">
        <Link to="/createuser"><button className="btncreate">
        Tạo Người Dùng
        </button>
        </Link>
        <table id="customers">
    <thead>
  <tr>
    <th>ID</th>
    <th>Tên Người Dùng</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
    {data.map((user, index) => {
        return <tr key={index}>
         <td>{user.id}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <button className="btnadmin"><Link to={`/updateuser/${user.id}`}>Edit</Link></button>
         <button className="btnadmin"onClick={() =>handleDelete(user.id)}>Delete</button>
       </tr>
    })}
 
  </tbody>
</table>

        
       </div>
    </div>  
        </>
        )
        

}

export default AdminPage;