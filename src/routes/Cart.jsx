import { useState, useEffect } from "react"
import ShoppingCart from "../components/ShoppingCart";
import Header from "../components/Header";
import Footer from "../components/Footer";


/**
 * The Cart of the website
 *
 * @author R. Walter Dongmepi W.
 * @version 0.5.0
 */
function Cart() {
  return (
    <div>
      <header>
        <Header searchBar={false} total={true}/>
      </header>
      <main className="bg-base-200  dark:bg-map-background dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover h-screen">
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  )
}
export default Cart;
