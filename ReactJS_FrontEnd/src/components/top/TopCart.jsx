import React from "react";
import Tdata from "./Tdata";
import Slider from "react-slick";

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
              },
            },
          ],

      };
    return (
        <>
        <Slider {...settings}>
        {Tdata.map((value,index) =>{
                return(
                    <>
                    <div className="box product" key={index}>
                        <div className="nametop d_flex">
                            <span className="tlft">{value.para}</span>
                            <span className="tright">{value.desc}</span>
                        </div>
                        <div className="img">
                            <img src={value.cover} alt="" />
                        </div>
                    </div>
                    </>
                )
            })
        }
        </Slider>
        </>
    )
}
export default TopCart