import React, { useEffect, useState } from "react";
import "./dashboard.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";



const TableProduct = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const readProduct = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/auth/getproduct");
                setData(res.data);
              } catch (err) {
                console.log(err);
              }
            };
            readProduct();
      }, [])
    return (
        <>
        <div className="box1">
      <ul className="ultrong">
        <Link to="/adminpage"><li><a >Manager User</a></li></Link>
        <Link to="/managerproduct"><li><a >Manager Product</a></li></Link>
        <li><a>Table Product</a></li>
         <li><a>Logout</a></li>
</ul>
</div>

<div className="box2">
        <div className="divadmin">
            Hello, Admin
        </div>
       <div className="divbox2">
        <Link to="/managerproduct"><button className="btncreate">
        Tạo Sản Phẩm
        </button>
        </Link>
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
       </tr>
    })}
 
  </tbody>
</table>

        
       </div>
    </div>
        </>
        )
        

}

export default TableProduct;