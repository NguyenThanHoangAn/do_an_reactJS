import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({productItems, addToCart}) => {
    return(
        <> 
          <section className='flash background'>
           <div className='container'>
              <di className='heading f_flex'>
                  <i className='fa fa-bolt'></i>
                  <h1>Flash Deals</h1>
              </di>
              <FlashCard productItems={productItems} addToCart={addToCart} />
           </div>
          </section>
        </>
    )
}

export default FlashDeals