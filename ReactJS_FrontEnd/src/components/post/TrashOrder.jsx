import React, { useEffect, useState} from "react";
import "./dashboard.css"
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


const TrashOrder = () => {
  const [data, setData] = useState([])
  const history = useHistory();
  useEffect(() => {
    const readDatas = async () => {
        try {
            const res = await axios.get("http://localhost:8800/api/auth/gettrashorder");
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
     readDatas();
  }, [])

  const handleRestore = async (id)=> {
    try {
      await axios.put("http://localhost:8800/api/auth/restoreorder/"+id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  

    return (
        <>
     
    <div className="box5">
       <div className="divbox5">
       <Link to="/managerorder"><button className="btncreate">
        Quay lại
        </button></Link>
        <table id="customers">
    <thead>
  <tr>
    <th>ID</th>
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
         <td>{order.total}</td>
         <button className="btnadmin5"onClick={() =>handleRestore(order.id)}>Restore</button>
       </tr>
    })}

 
  </tbody>
</table>

        
       </div>
    </div>  
        </>
        )
        

}

export default TrashOrder;