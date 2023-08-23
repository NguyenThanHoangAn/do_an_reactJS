import React, { useContext } from "react";
import logo from "../../components/assets/images/logo.png"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";


const Search = ({ CartItem }) => {

  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)

    
  // })
  const { currentUser, logout} = useContext(AuthContext);


     return(
         <>
           <section className='search'>
           <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
            </div>
            <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <div className="login">
            
              <div className="dropdown">
                <span>
                <i className='fa fa-user icon-circle'>
                </i>
                </span>
                <div className="dropdown-content">
                  <p>{currentUser?.username}</p>
                  {currentUser ? <p onClick={logout}>Logout</p> : <Link className="link" to="/login">Login</Link>}
                </div>
                </div> 
                </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>0</span>
              </Link>
            </div>
          </div>
          </div>

           </section>
         </>
     )
} 

export default Search