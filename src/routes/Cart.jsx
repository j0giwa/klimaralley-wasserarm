import { useState, useEffect } from "react"
import ShoppingCart from "../components/ShoppingCart";
import Header from "../components/Header";

function Cart() {
  return (
    <div>
      <Header />
      <ShoppingCart />
    </div>
  )
}
export default Cart();
