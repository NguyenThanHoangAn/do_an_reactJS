import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import "./Payment.css"
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";




const   Payment = ({CartItem}) => {
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
    const [inputs, setInput]= useState({
        address:"",
        phone:"",
        total: totalPrice,
    })
    const [err, setError] = useState(null)

    let history = useHistory();

    const handleChange = e => {
        setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try{
            const body = {
                "userInfo" : {
                    "address" : inputs.address,
                    "phone"   : inputs.phone,
                    "total"   : inputs.total,
                },
                "accessToken" : Cookies.get("access_token"),
                // "products" : inputProducts
            }
    
          fetch('http://localhost:8800/api/auth/orderproduct',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Credentials" : true 

                },

                body: JSON.stringify(body),
            })
            history.push('/')
            toast.success("Thanh toán thành công")  
        }catch(err){
            setError(err.response.data);
        }

        // inputProducts = []
        
      
    }
    console.log(inputs.total)
    
    return (
      <>
      <Header/>
      <section>
        <div className="div-pay">
        <div className="form-pay">
            <form action="">
            <label htmlFor="">Địa chỉ nhận hàng</label>
            <input type="text" name="address" id="" onChange={handleChange} />
            <label htmlFor="">Số điện thoại</label>
            <input type="number" name="phone" onChange={handleChange} />
            <label htmlFor="">Tổng giá tiền($) </label>
            <input type="text" name="total" value={totalPrice} onChange={handleChange} ></input>
            </form>
            </div>
        </div>
        
              
        
            <div>
                <table>
                
                         <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Tổng</th>
                        </tr>
                        {CartItem.map((item) => {
                    const productQty = item.price * item.qty
                return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={`http://localhost:8800/images/` + item.image} style={{width:"20%"}} alt='' /></td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{productQty}$</td>
                         </tr>
        )
    })}
</table>
            </div>
        <div className="btnpayment"><button className="paymentproduct" onClick={handleSubmit}>Thanh Toán</button></div>
        
      </section>
      <Footer/>
      
      </>
    )
  }
  
  export default Payment;