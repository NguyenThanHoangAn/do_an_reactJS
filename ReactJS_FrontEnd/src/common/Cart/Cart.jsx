import React from "react"
import "./style.css"
import Header from "../header/Header"

const Cart = ({ CartItem, addToCart, decreaseQty, removeProduct }) => {
  
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  
  return (
    <>
    <Header/>
      <section className='cart-items'>
        <div className='container d_flex'>
          
        <div className="colum">
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>GIỎ HÀNG ĐANG TRỐNG</h1>}

            
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={`http://localhost:8800/images/` + item.image} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price} VND SL: {item.qty}
                      <span>{productQty}.000 VND</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => removeProduct(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>TỔNG GIỎ HÀNG</h2>
            <div className=' d_flex'>
              <h4>TỔNG GIÁ TIỀN :</h4>
              <h3>{totalPrice}.000 VND</h3>
            </div>
          </div>
          </div>
        </div>
        <div><button className="buy-now">Thanh Toán</button></div>
        
      </section>
    </>
  )
}

export default Cart
