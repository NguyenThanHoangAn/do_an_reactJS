import React from 'react'
import "./annu.css"

const Annu = () => {
    const mystyle = {
        width: "30%",
        height: "340px",
    }
    const mystyle1 = {
        width: "68%",
        height: "340px",
    }
    return (
        <>
            <section className='annocument background'>
                <div className='container d_flex'>
                    <div className='banner'>
                    <div className='img1'>
                        <img src='./images/banner-1.png' width='100%' height='100%' />
                    </div>
                    <div className='img2'>
                        <img src='./images/banner-2.png' width='100%' height='100%' />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Annu