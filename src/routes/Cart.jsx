import { useState, useEffect } from "react"
import ShoppingCart from "../components/ShoppingCart";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div className="bg-base-200 dark:bg-map-background dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover dark:h-screen">
      <Header />
      <Footer />
    </div>
  )
}
export default Cart;
