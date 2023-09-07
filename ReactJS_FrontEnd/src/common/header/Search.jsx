import React, { useContext, useState } from "react";
import logo from "../../components/assets/images/logo.png"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../context/authContext";


const Search = ({ CartItem }) => {

  const { currentUser, logout} = useContext(AuthContext);
  const [inputs, setInput]= useState({
    search:"",
})
const handleChange = e => {
  setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
}

  const history = useHistory();
  const handleKeyPress =  e => {
    if(e.key === 'Enter'){
      console.log('enter press here! ')
      history.push("/searchproduct?search=" + inputs.search )
      window.location.reload()
    }
  }

     return(
         <>
           <section className='search'>
           <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
            </div>
            <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' name="search" onChange={handleChange} onKeyPress={handleKeyPress}/>
          </div>

          <div className='icon f_flex width'>
            <div className="login">
            
              <div className="dropdownlogin">
                <span>
                <i className='fa fa-user icon-circle'>
                </i>
                </span>
                <div className="dropdown-contentlogin">
                  <p>{currentUser?.username}</p>
                  {currentUser ? <p onClick={logout}>Đăng xuất</p> : <Link className="link" to="/login">Đăng nhập</Link>}
                </div>
                </div> 
                </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span> {CartItem?.length}</span>
              </Link>
            </div>
          </div>
          </div>

           </section>
         </>
     )
} 

export default Search