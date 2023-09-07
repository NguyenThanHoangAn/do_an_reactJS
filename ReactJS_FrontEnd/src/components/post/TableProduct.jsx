import React, { useEffect, useState } from "react";
import "./dashboard.css"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";



const TableProduct = () => {
  const history = useHistory();
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


      const handleDeleteProduct = async (id)=> {
        try {
          await axios.put("http://localhost:8800/api/auth/product/"+id)
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
        <li><a>Table Product</a></li>
        <Link to="/managerorder"><li><a>Manager Order</a></li></Link>
         <li onClick={handleLogout}><a>Logout</a></li>
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
        <Link to="/trashproduct"><button className="btncreate"><i class="fa-regular fa-trash-can"></i></button></Link>
        <table id="customers">
    <thead>
  <tr>
    <th>Mã Sản Phẩm</th>
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
         <td>{product.price} $</td>
         <td>{product.discount}</td>
         <button className="btnadmin" onClick={() =>handleDeleteProduct(product.id)}>Delete</button>
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