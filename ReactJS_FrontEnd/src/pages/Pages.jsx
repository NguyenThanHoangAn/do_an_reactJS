import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Annu from "../components/annocuments/Annu";
import Wrapper from "../components/wrapper/Wrapper";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pages = ({ productItems, CartItem, addToCart }) => {
  const [shopItems, setProduct] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8800/api/auth/product')
    .then(res => {
      setProduct(res.data)
    })
  }, []);
    return (
        <>
         <Header CartItem={CartItem}/>
            <Home CartItem={CartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Annu />
            <Wrapper />
            <Footer />
        </>
    )
}

export default Pages