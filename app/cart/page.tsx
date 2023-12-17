"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import CartProductCard from "../components/cart/CartProductCard";
import CartSummary from "../components/cart/CartSummary";

const CartPage = () => {
  return (
    <Container>
      <div
        className="
          flex 
          flex-col 
          "
      >
        <Heading title="Shopping Cart" />
        <div
          className="
            grid 
            grid-cols-1 
            xl:grid-cols-3
            gap-24"
        >
          <div className="col-span-2">
            <CartProductCard />
            <CartProductCard />
          </div>
          <CartSummary />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
