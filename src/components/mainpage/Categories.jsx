import React from "react";

const Categories = () => {
     const data = [
        {
            cateImg: ".assets/images/cate.png",
            cateName:"Nam",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Nữ",
          },
          {
            cateImg: "./images/category/cat3.png",
            cateName: "Unisex",
          },
          {
            cateImg: "./images/category/cat4.png",
            cateName: "Home & Garden",
          },
          {
            cateImg: "./images/category/cat5.png",
            cateName: "Gifts",
          },
          {
            cateImg: "./images/category/cat6.png",
            cateName: "Music",
          },
         
      
     ]
    return(
        <>
           <div className='category'>
            {
                data.map((value,index) =>{
                    return(
                       <div className="box f_flex" key={index}>
                         <img src={value.cateImg} alt=''/>
                         <span>{value.cateName}</span>
                       </div>
                    )
                })
            }
           </div>
        </>
    )
}

export default Categories