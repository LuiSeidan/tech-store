import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart: [],
    cartItems: 2,
    cartOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    featuredProducts: [],
    filteredProducts: [],
    links: linkData,
    loading: false,
    sidebarOpen: false,
    socialIcons: socialData,
    storeProducts: [],
    singleProduct: {}
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });

    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      featuredProducts,
      filteredProducts: storeProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };

  getStorageProduct = () => {
    return [];
  };

  getStorageCart = () => {
    return [];
  };

  addTotals = () => {};

  getTotals = () => {};

  asyncStorage = () => {};

  addToCart = id => {
    console.log(`Add to cart ${id}`, id);
  };

  setSingleProduct = id => {
    console.log(`Set single Product ${id}`);
  };

  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };

  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };

  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          openCart: this.openCart,
          closeCart: this.closeCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
