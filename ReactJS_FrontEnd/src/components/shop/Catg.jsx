import React from "react";

const Catg =() =>{
    const data = [
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "CHO NAM",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "CHO NỮ",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "CHO NGƯỜI GIÀ",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "CHO TRẺ EM",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "CHO TRUNG NIÊN",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "CHO NGƯỜI BẦU",
        },
      ]
    return(
        <>
        <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
        </>
    )
}

export default Catg