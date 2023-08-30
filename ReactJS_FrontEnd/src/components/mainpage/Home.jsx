import React from "react"

import Slider from './Slider'
import"./Home.css"

const  Home = () => {
    return(
        <>
           <section className="home">
             <div className="container d_flex">
             
                
                <Slider />
              
             </div>
           </section> 
        </>
    )
}

export default Home