import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import Product from "./Product";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center="true"></Title>
        <div className="row mt-5">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return featuredProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="second-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
