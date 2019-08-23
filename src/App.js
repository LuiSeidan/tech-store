// Dependencies
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
// Page Components
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";
// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SideCart />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
