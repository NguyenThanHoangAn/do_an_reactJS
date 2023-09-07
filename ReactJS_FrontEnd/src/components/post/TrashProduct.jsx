import React, { useEffect, useState} from "react";
import "./dashboard.css"
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


const TrashProduct = () => {
  const [data, setData] = useState([])
  const history = useHistory();
  useEffect(() => {
    const readDatas = async () => {
        try {
            const res = await axios.get("http://localhost:8800/api/auth/getproducttrash");
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
     readDatas();
  }, [])

  const handleRestore = async (id)=> {
    try {
      await axios.put("http://localhost:8800/api/auth/restoreproduct/"+id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  

    return (
        <>
     
    <div className="box5">
       <div className="divbox5">
       <Link to="/managerproduct"><button className="btncreate">
        Quay lại
        </button></Link>
        <table id="customers">
    <thead>
  <tr>
    <th>ID</th>
    <th>Tên Sản Phẩm</th>
    <th>Giá Tiền</th>
    <th>Giảm Giá</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
    {data.map((product, index) => {
        return <tr key={index}>
         <td>{product.id}</td>
         <td>{product.name}</td>
         <td>{product.price}</td>
         <td>{product.discount}</td>
         <button className="btnadmin5"onClick={() =>handleRestore(product.id)}>Restore</button>
       </tr>
    })}

 
  </tbody>
</table>

        
       </div>
    </div>  
        </>
        )
        

}

export default TrashProduct;