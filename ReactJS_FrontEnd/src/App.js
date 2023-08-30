import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,  Route } from "react-router-dom";
import Pages from './pages/Pages';
import { useState } from 'react';
import Cart from "./common/Cart/Cart";
import Login from "./components/login/Login";
import Register from './components/login/register';
import Details from './components/detail/details';
import Blog from './components/blog/blog';
import LoginAdmin from './components/post/LoginAdmin';
import RegisterAdmin from './components/post/registerAdmin';
import AdminPage from './components/post/AdminPage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ManagerProduct from './components/post/ManagerProduct';
import AddUser from './components/post/AddUser';
import UpdateUser from './components/post/UpdateUser';
import TableProduct from './components/post/TableProduct';






function App() {
  const [CartItem, setCartItem] = useState([])

  const addToCard = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const removeProduct = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty > 0) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty} : item)))
    }
  }

  

  return (

    <>
      <Router>
        <Switch CartItem={CartItem}>
          <Route path='/' exact>
            <Pages addToCart={addToCard}/>
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCard} decreaseQty={decreaseQty} removeProduct={removeProduct} />
          </Route>
          <Route path='/login' exact >
            <Login/>
          </Route>
          <Route path='/register' exact >
            <Register/>
          </Route>
          <Route path="/details/:id" exact>
            <Details addToCart={addToCard} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/blog" exact>
            <Blog/>
          </Route>
          <Route path='/loginadmin' exact>
            <LoginAdmin/>
          </Route>
          <Route path='/registeradmin' exact>
            <RegisterAdmin/>
          </Route>
          <Route path="/adminpage" exact render ={() => {
            return localStorage.getItem("token") ? <AdminPage/> : <Redirect to="/loginadmin"/>
          }}>
            
          </Route>
          <Route path="/managerproduct" exact>
            <ManagerProduct/>
          </Route>
          <Route path="/createuser">
            <AddUser/>
          </Route>
          <Route path="/updateuser">
            <UpdateUser/>
          </Route>
          <Route path="/tableproduct">
            <TableProduct/>
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;

