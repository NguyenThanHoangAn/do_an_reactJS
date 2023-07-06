
import './App.css';
import Header from "./common/header/Header";
import {BrowserRouter as Router,Switch,Route  } from "react-router-dom";

function App() {
  return (
   
    <>
     <Router>
        <Header />
        <Switch>
        </Switch>
      </Router>
    </>
  );
}

export default App;

