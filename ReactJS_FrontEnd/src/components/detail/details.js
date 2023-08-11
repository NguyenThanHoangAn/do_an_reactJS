import React, { useState } from "react";
import "./details.css";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer"

const Details = () => {
  const [quantity, setQuantity] = useState (1)

  const images = [
    "./images/shops/shops-1.png",
    "./images/shops/shops-2.png"
  ]
  
    return (
        <>
        <Header/>
      <div className="pd">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt=""/>
          </div>
        </div>
        <div className="right">
          <h1>Azzaro Wanted</h1>
          <span className="price">180.000 VNĐ</span>
          <p>
          Bạn đang đi tìm một mùi hương dễ dùng, đa dụng, nhưng không quá quen thuộc theo kiểu những chai nước hoa phổ biến? Azzaro Wanted sẽ là một lựa chọn thú vị nhưng không kém an toàn dành cho bạn, bằng hương thơm theo kiểu Gỗ - Gia vị ấm áp, được hoàn thiện chỉn chu cả về mùi hương và ngoại hình với một chiếc chai đựng bắt mắt.
          </p>
          <div className="quantily">
            <button onClick={()=>setQuantity((prev)=>(prev === 1 ? 1 : prev -1))}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button className="add">
            <addToCart/> Thêm vào giỏ hàng
          </button>
        </div>
      </div>
        <Footer/>
        </>
    )
}

export default Details;