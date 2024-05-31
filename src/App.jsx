import { useState, useEffect } from "react"
import ShopItems from "./components/ShopItems"

function App() {

  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/water/items')
      .then((response) => response.json())
      .then((jsondata) => { setShopItems(jsondata); })
      .catch((err) => {console.error(err.message); });
  }, [])

  return (
    <>
      <main>
	<div className="container p-2">
          <ShopItems shopItems={shopItems} />
	</div>
      </main>
    </>
  )
}

export default App
