// import logo from './logo.svg';
// import './App.css';
// import Header from "./components/mains/HeaderComponent";
// import Navbars from "./components/mains/Navbars";
// import HeaderSearchBars from "./components/mains/HeaderSearchBars";
// import Carosuel from "./components/mains/Carosuel";
// import SlideSlickOne from "./components/mains/SlideSlickOne";
import ProductDeatil from "./components/mains/ProductDeatil";
import Home from "./components/mains/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Order from "./components/mains/OrderCard.js"
import UserDetail from "./components/mains/UserDetail.js"
import Payment from "./components/mains/Payment.js";
import ShippingDetail from "./components/mains/ShippingDetail.js"

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/payment" component={Payment} />
      <Route path="/shippingdetail" component={ShippingDetail} />
      
      <Route path="/userdetail" component={UserDetail} />
      <Route path="/order-cart/:id" component={Order} />
      <Route path="/:id" component={ProductDeatil} />
      </Switch>
    </Router>
  );
}

export default App;
