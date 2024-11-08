// import logo from './logo.svg';
import '../../../src/App.css';
import Header from "./HeaderComponent";
import Navbars from "./Navbars";
import HeaderSearchBars from "./HeaderSearchBars";
import Carosuel from "./Carosuel";
import SlideSlickOne from "./SlideSlickOne";
import ProductDeatil from "./ProductDeatil";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
    
  return (
    // <Router>
    //   <Switch>
    //   <Route exact path="/"  component={App}/>
    //     <Route path="/productId/:id" component={ProductDeatil} />
    //   </Switch>
      <div className="App">
        <div className="mainContainer">
          <header className="header"><Header /></header>
          <div className="headerSearchBar"><HeaderSearchBars /></div>
          <div className="navBar"><Navbars /></div>
          <main className="main">
            <div>
              <Carosuel />
            </div>
            <div>
              <SlideSlickOne />
            </div>

          </main>
          <footer className="footer">footer</footer>
        </div>
      </div>
    // </Router>
  );
}

export default Home;
