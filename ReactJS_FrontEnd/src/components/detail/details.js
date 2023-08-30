import React, { useState, useEffect } from "react";
import "./details.css";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Details = ({addToCart}) => {
  let productId  = useParams();
  const [products, setProduct] = useState(null);
  const [qty, setQuantity] = useState (1)
  // const thisProduct = products.find(prod => prod.id === productId)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await axios.get(
          `http://localhost:8800/api/auth/detailproduct/${productId.id}`
        );
        // console.log(data);
        setProduct(data.data[0]);
      } catch (error) {
        console.error( error );
      }
    };

      fetchCategories();
  }, [productId.id]);

    if (!products) {
      return <div>Loading...</div>; 
  }
  
    return (
        <>
        <Header/>
        
      <div className="pd">
        <div className="left">
          <div className="images">
            <img src={`http://localhost:8800/images/` + products.image} alt=""/>
          </div>
        </div>
        <div className="right">
          <h1>{products.name}</h1>
          <span className="price">{products.price} VNĐ</span>
          <p>
          Bạn đang đi tìm một mùi hương dễ dùng, đa dụng, nhưng không quá quen thuộc theo kiểu những chai nước hoa phổ biến? {products.name} sẽ là một lựa chọn thú vị nhưng không kém an toàn dành cho bạn, bằng hương thơm theo kiểu Gỗ - Gia vị ấm áp, được hoàn thiện chỉn chu cả về mùi hương và ngoại hình với một chiếc chai đựng bắt mắt.
          </p>
          <div className="quantily">
            <button className="btn-quantily" onClick={()=>setQuantity((prev)=>(prev === 1 ? 1 : prev -1))}>-</button>
            {qty}
            <button className="btn-quantily" onClick={()=>setQuantity(prev=>prev+1)} >+</button>
          </div>
          <button className="add" onClick={() => addToCart(products, products.qty)}>
             Thêm vào giỏ hàng
          </button>
        </div>
      </div>
        <Footer/>
        </>
    )
}

export default Details;