import React, { useEffect } from "react"
import CategorieFruit from "./CategorieFruit";
import ShoppingCart from "../components/ShoppingCart";
import CartItem from "../components/CartItem";

/**
 * Index Page 
 */
function App() {
  useEffect(() => {
    document.title = 'Wasserarmsatt';
  }, [])

  return (
    <main>
      <div className="container mx-auto">
        <CategorieFruit />
      </div>
    </main>
  )
}

export default App
