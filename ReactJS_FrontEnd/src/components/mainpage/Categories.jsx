import React from "react";

const Categories = () => {
     const data = [
        {
            cateImg: ".assets/images/cate.png",
            cateName:"NAM",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "NỮ",
          },
          {
            cateImg: "./images/category/cat3.png",
            cateName: "CAO TUỔI",
          },
          {
            cateImg: "./images/category/cat4.png",
            cateName: "THANH LỊCH",
          },
          {
            cateImg: "./images/category/cat5.png",
            cateName: "NHẸ NHÀNH",
          },
          {
            cateImg: "./images/category/cat6.png",
            cateName: "THƠM LÂU",
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