
import './App.css';
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from './pages/Pages';
import Data from "./components/flashDeals/Data"
import Sdata from "./components/shop/Sdata"
import { useState } from 'react';
import Cart from "./common/Cart/Cart";
import Footer from './common/footer/Footer';
import Login from "./components/login/Login";
import Register from './components/login/register';


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata
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
  return (

    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCard} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCard} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/login' exact >
            <Login/>
          </Route>
          <Route path='/register' exact >
            <Register/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

