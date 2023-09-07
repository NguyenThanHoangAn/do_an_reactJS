import React, { useEffect, useState} from "react";
import "./dashboard.css"
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


const ManagerOrder = () => {
  const [data, setData] = useState([])
  const history = useHistory();
  useEffect(() => {
    const readDatas = async () => {
        try {
            const res = await axios.get("http://localhost:8800/api/auth/managerorder");
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
     readDatas();
  }, [])

  const handleDeleteOrder = async (id)=> {
    try {
      await axios.put("http://localhost:8800/api/auth/deleteorder/"+id)
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
      <Link to="/adminpage"><li><a >Manager User</a></li></Link>
        <Link to="/managerproduct"><li><a >Manager Product</a></li></Link>
        <Link to="/tableproduct"><li><a>Table Product</a></li></Link>
        <li><a>Manager Order</a></li>
         <li onClick={handleLogout}><a>Logout</a></li>
</ul>
</div>

    <div className="box2">
        <div className="divadmin">
            Hello, Admin
        </div>
       <div className="divbox2">
        <Link to="/trashorder"><button className="btncreate"><i class="fa-regular fa-trash-can"></i></button></Link>
        
        <table id="customers">
    <thead>
  <tr>
    <th>Mã Hóa Đơn</th>
    <th>Tên người nhận</th>
    <th>Địa chỉ nhận hàng</th>
    <th>Tổng tiền</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
  {data.map((order, index) => {
        return <tr key={index}>
         <td>{order.id}</td>
         <td>{order.username}</td>
         <td>{order.address}</td>
         <td>{order.total} $</td>
         <button className="btnadmin" onClick={() =>handleDeleteOrder(order.id)}>Delete</button>
       </tr>
    })}
 
  </tbody>
</table>

        
       </div>
    </div>  
        </>
        )
        

}

export default ManagerOrder;