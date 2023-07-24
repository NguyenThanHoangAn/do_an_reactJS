import React from "react";
import TopCart from "./TopCart";
import "./Style.css";

const TopCate = () => {
    return (
        <>
        <section className="topCat background">
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <i className="fa fa-border-all"></i>
                        <h2>Top Catgories</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all</span>
                        <i className="fa fa-care-right"></i>
                    </div>
                </div>
                <TopCart/>
            </div>
        </section>
        </>
    )
}
export default TopCate