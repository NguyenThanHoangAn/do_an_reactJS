import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "./Order.css"
import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const Order = () => {

    const [data, setData] = useState([])
    useEffect(() => {
      const readDataOrder = async () => {
        
          try {
            const accessToken = Cookies.get('access_token')
              const res = await axios.get("http://localhost:8800/api/auth/historyorderproduct",
              {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer ' + accessToken

                },
              },
            );
            
              setData(res.data);
              
            } catch (err) {
              console.log(err);
            }
          };
          readDataOrder();
    }, [])
  return (
    <>
      <Header />
      <section className="table4">
      <h1 className="historyh1">Lịch sử mua hàng</h1>
        <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Mã hóa đơn</th>
              <th>Tên người nhận</th>
              <th>Địa chỉ nhận hàng</th>
              <th>Số điện thoại</th>
              <th>Tổng tiền</th>
            </tr>
            </thead>
            <tbody>
            {data.map((order, index) => {
            return <tr key={index}>
              <td>{order.id}</td>
              <td>{order.username}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
              <td>{order.total}</td>
            </tr>
            })}
            </tbody>
        </table>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Order;