import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import Carousel from './pages/Carousel.js';
import Cart from './cart/cart.js';
import ButtonBar from './headerComponent/myLarageModal.js';

import NavBars from './headerComponent/navBars.js';
import MenuBar from './headerComponent/menuBar.js';
import Footer from './footerComponent/footer.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBars />
          <MenuBar />
          <Carousel/>
          <Cart/>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="PDP" exact path="PDP" component={HomePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;