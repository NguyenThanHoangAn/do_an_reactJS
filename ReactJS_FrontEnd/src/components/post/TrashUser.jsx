import React, { useEffect, useState} from "react";
import "./dashboard.css"
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


const TrashUser = () => {
  const [data, setData] = useState([])
  const history = useHistory();
  useEffect(() => {
    const readDatas = async () => {
        try {
            const res = await axios.get("http://localhost:8800/api/auth/getusertrash");
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
     readDatas();
  }, [])

  const handleRestore = async (id)=> {
    try {
      await axios.put("http://localhost:8800/api/auth/restoreuser/"+id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

    return (
        <>
     
    <div className="box5">
       <div className="divbox5">
       <Link to="/adminpage"><button className="btncreate">
        Quay lại
        </button></Link>
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
         <button className="btnadmin5"onClick={() =>handleRestore(user.id)}>Restore</button>
       </tr>
    })}
 
  </tbody>
</table>

        
       </div>
    </div>  
        </>
        )
        

}

export default TrashUser;