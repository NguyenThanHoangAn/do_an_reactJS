import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";

const  Pages = ({productItems, CartItem, addToCart, shopItems}) => {
    return(
        <>
           <Home CartItem={CartItem}/>
           <FlashDeals productItems={productItems} addToCart={addToCart}/>
           <TopCate/>
           <NewArrivals/>
           <Discount/>
           <Shop shopItems={shopItems} addToCart={addToCart} />
        </>
    )
}

export default Pages