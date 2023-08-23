import React, { useEffect, useState } from "react";
import "./dashboard.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";



const ManagerProduct = () => {
    const [file, setFile] = useState();
    const [product, setProduct]= useState({
        productName:"",
        price:"",
        discount:"",
    })
    
    const handleChange = e => {
        setProduct(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }
    
    const handleUpload = (e) => {
        e.preventDefault()
        console.log(product)
        const formdata = new FormData();
        formdata.append('image', file);
        formdata.append('name', product.productName);
        formdata.append('price', product.price);
        formdata.append('discount', product.discount);
        axios.post('http://localhost:8800/api/auth/upload', formdata)
        .then(res => {
            if(res.data.Status === "Success") {
                console.log("Succeded")
            } else {
                console.log("Failed")
            }
        })
        .catch(err => console.log(err));
    }
    return (
        <>
        <div className="box1">
      <ul className="ultrong">
        <Link to="/adminpage"><li><a >Manager User</a></li></Link>
        <li><a >Manager Product</a></li>
         <li><a>Logout</a></li>
</ul>
</div>

    <div className="box3">
        <div className="box3trong">
        <form action="" >
            <h2 className="h2product">Tạo Sản Phẩm Mới</h2>
            <label>Tên Sản Phẩm</label>
            <input type="text" name="productName" onChange={handleChange}/>
            <label>Giá</label>
            <input type="number" name="price" onChange={handleChange}/>
            <label>Giảm Giá</label>
            <input type="number" name="discount" onChange={handleChange}/>
        <input type="file" onChange={handleFile}/>
        <button onClick={handleUpload}>Upload</button>
        </form>
        </div>
    </div>  
        </>
        )
        

}

export default ManagerProduct;