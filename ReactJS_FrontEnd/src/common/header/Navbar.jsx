import React, { useState }  from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
     return(
         <>
           <header>
           <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <span className="dropdown">
              <h5>Categories <i className='fa fa-chevron-down'></i></h5>
              <div className="dropdown-content">
                <h6>Nam</h6>
                <h6>Nữ</h6>
                <h6>Thanh lịch</h6>
                <h6>Nhẹ nhàng</h6>
                <h6>Lưu hương</h6>
                <h6>Quyến rũ</h6>
              </div>
            </span>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
             
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/track'>Order</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
           </header>
         </>
     )
} 

export default Navbar