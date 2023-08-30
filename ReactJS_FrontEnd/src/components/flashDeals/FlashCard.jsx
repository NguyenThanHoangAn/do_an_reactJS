import React, { useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Link } from "react-router-dom/cjs/react-router-dom.min";

  const FlashCard = ({ productItems, addToCart }) => {
      const [count, setCount] = useState(0)
      const increment = () => {
        setCount(count + 1)
      };
      const settings = {    
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4 ,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
      };
   
    
    return(
        <>
         <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
        
            <div className="box">
                <div className="product mtop">
                    <div className="img">
                        <span className="discount">{productItems.discount}% Off</span>
                        <img src={productItems.cover} alt=""/>
                        <div className='product-like'>
                            <label>0</label> <br />
                            <i className="fa-regular fa-heart" onClick={increment}></i>
                        </div>
                    </div>
                    <div className="product-details">
                        <h3>{productItems.name}</h3>
                        <div className="rate">
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>

                        </div>
                        <div className="price">
                            <h4>{productItems.price}.000 VND</h4>
                            <button onClick={() => addToCart(productItems)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
              )
            })}
            </Slider>
        </>
    );
};

export default FlashCard