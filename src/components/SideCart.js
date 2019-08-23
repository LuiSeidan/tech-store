import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, closeCart, cartOpen } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>Cart Items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  height: 100%;
  width: 100%;
  background: var(--mainGrey);
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
