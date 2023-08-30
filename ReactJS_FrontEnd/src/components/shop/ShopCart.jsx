
import React, { useState} from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"




const ShopCart = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }
    return(
        <>
        {shopItems.map((shopItems) => {
          return (
            
            <div className="box" >
                
                <div className="product mtop">
                
                    <div className="img">
                        <span className="discount">{shopItems.discount}% Off</span>
                        
                        <Link to={`/details/${shopItems.id}`}> <img src={`http://localhost:8800/images/` + shopItems.image} alt=""/></Link>
                        
                        <div className='product-like'>
                            <label>0</label> <br />
                            <i className="fa-regular fa-heart" onClick={increment}></i>
                        </div>
                    </div>
                    
                    <div className="product-details">
                        <h3>{shopItems.name}</h3>
                        <div className="rate">
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>

                        </div>
                        <div className="price">
                            <h4>{shopItems.price} VND</h4>
                            <button onClick={() => addToCart(shopItems)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
               
            </div>
            
           
              )
            })}
            
        </>
    )
}

export default ShopCart