import React, { useState }  from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
     return(
         <>
         
           <header>
           <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <span className="dropdown1">
              <h5 class="dropbtn">Categories<i onClick={() => setIsOpen(!isOpen)} className='fa fa-chevron-down' ></i></h5>
              {isOpen && (
              <div className="dropdown-content1">
                <p>Chanel</p>
                <p>Gucci</p>
                <p>Dior</p>
                <p>Bvlgari</p>
                <p>Narciso</p>
                <p>Burberry</p>
              </div>
              )}
            </span>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
             
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/blog'>blog</Link>
              </li>
              <li>
                <Link to='/order'>order</Link>
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