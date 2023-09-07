import React from "react";
import Shop from "../shop/Shop";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { useEffect, useState, location } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import queryString from 'query-string';



const SearchProduct = ({ CartItem, addToCart }) => {
    const search = window.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const keyword = params.get('search'); // bar
  const [shopItems, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8800/api/auth/searchproduct/" + keyword)
    .then(res => {
      setProduct(res.data)
    })
  }, []);
  console.log(keyword)

    
    return (
        <>
         <Header CartItem={CartItem}/>
         <div>Đang tìm kiếm từ khóa "{keyword}"</div>
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Footer />
        </>
    )
}

export default SearchProduct