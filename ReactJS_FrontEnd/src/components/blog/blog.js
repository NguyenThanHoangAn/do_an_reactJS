import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Header />
      <section id="page-header" className="blog-header">
        <h2 style={{color:"pink"}}>Cách chọn nước hoa phù hợp với bản thân</h2>
      </section>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="images/blog/anh1.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Xác định tính cách của bạn.</h4>
            <p>Tính cách của bạn là yếu tố quan trọng nhất cần cân nhắc khi chọn nước hoa. Nếu bạn là người hướng nội, bạn nên chọn những mùi hương nhẹ nhàng, tinh tế. Nếu bạn là người hướng ngoại, bạn có thể chọn những mùi hương mạnh mẽ, cuốn hút hơn.</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>Thứ 1</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="images/blog/anh2.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Xác định sở thích của bạn.</h4>
            <p>Bạn thích mùi hương nào? Bạn thích mùi hương ngọt ngào, tươi mát hay trầm ấm? Khi đã xác định được sở thích của mình, bạn sẽ dễ dàng tìm được những mùi hương phù hợp với mình hơn.</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>Thứ 2</h1>
        </div><div className="blog-box">
          <div className="blog-img">
            <img src="images/blog/anh3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Xác định phong cách của bạn.</h4>
            <p>Phong cách của bạn cũng là một yếu tố cần cân nhắc khi chọn nước hoa. Nếu bạn có phong cách trang trọng, bạn nên chọn những mùi hương sang trọng, tinh tế. Nếu bạn có phong cách trẻ trung, năng động, bạn có thể chọn những mùi hương tươi mát, vui tươi hơn.</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>Thứ 3</h1>
        </div><div className="blog-box">
          <div className="blog-img">
            <img src="images/blog/anh4.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Thử nước hoa trước khi mua.</h4>
            <p>Đây là bước quan trọng nhất khi chọn nước hoa. Bạn nên thử nước hoa trên da mình để xem mùi hương có phù hợp với mình hay không. Hãy thử nước hoa ở nhiều thời điểm khác nhau trong ngày để xem mùi hương có thay đổi không.</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>Thứ 4</h1>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog;