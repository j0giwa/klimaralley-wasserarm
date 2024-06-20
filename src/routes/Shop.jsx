import { useState, useEffect } from "react"
import ShopItem from "../components/ShopItem";
import ShoppingCart from "./Cart";

/**
 * Shop page (main part) of the wasserarm-satt game
 *
 * @author Jonas Schwind
 * @version 0.4.0
 */
function Shop() {
  /**
   * Represents an array of ShopItems for the shop.
   *
   * @typedef {Object} ShopItem
   * @property {number} id - The ID of the object.
   * @property {String} name - Name of the product.
   * @property {Enumerator} type - Type (Kategory) of the product.
   * @property {number} water - waterusage of the product.
   * @property {number} price - price of the product.
   */

  /** @type {ShopItem[]} */
  const [shopItems, setShopItems] = useState([]);

  // Used for ui programming without backend connection TODO: delete after
  const fakeShopItems = [
    { id: 0, name: "Fake Ding", type: "DRINK", water: 0, price: 0 },
    { id: 1, name: "Fake Röstkaffe", type: "DRINK", water: 21000, price: 50 },
    { id: 2, name: " Fake Rindfleisch", type: "MEAT", water: 15455, price: 200 },
    {
      id: 3,
      name: "Fake Schokolade",
      type: "ANINAL_PRODUCT",
      water: 17196,
      price: 50,
    },
    { id: 4, name: "Fake Käse", type: "ANINAL_PRODUCT", water: 5000, price: 100 },
    { id: 5, name: "Fake Schweinefleisch", type: "MEAT", water: 15455, price: 100 },
    { id: 6, name: "Fake Hühnerfleisch", type: "MEAT", water: 3900, price: 120 },
    { id: 7, name: "Fake Reis", type: "VEGETABLE", water: 3470, price: 60 },
    { id: 8, name: "Fake Ei", type: "ANINAL_PRODUCT", water: 3300, price: 10 },
    { id: 9, name: "Fake Olivenöl", type: "VEGETABLE", water: 14725, price: 200 },
    { id: 10, name: "Fake Rapsöl", type: "VEGETABLE", water: 4300, price: 150 },
    { id: 11, name: "Fake Avocado", type: "VEGETABLE", water: 2000, price: 200 },
    { id: 12, name: "Fake Salat", type: "VEGETABLE", water: 237, price: 100 },
    { id: 13, name: "Fake Gurke", type: "VEGETABLE", water: 353, price: 100 },
    { id: 14, name: "Fake Zucker", type: "VEGETABLE", water: 1500, price: 30 },
    { id: 15, name: "Fake Spargel", type: "VEGETABLE", water: 1473, price: 80 },
    { id: 16, name: "Fake Brot", type: "ANINAL_PRODUCT", water: 1340, price: 120 },
    { id: 17, name: "Fake Weizen", type: "VEGETABLE", water: 1000, price: 30 },
    { id: 18, name: "Fake Milch", type: "ANINAL_PRODUCT", water: 1000, price: 50 },
    { id: 19, name: "Fake Wein", type: "DRINK", water: 1000, price: 180 },
    { id: 20, name: "Fake Apfelsaft", type: "DRINK", water: 950, price: 30 },
    { id: 21, name: "Fake Mais", type: "DRINK", water: 900, price: 40 },
    { id: 22, name: "Fake Orangensaft", type: "DRINK", water: 850, price: 20 },
    { id: 23, name: "Fake Bier", type: "DRINK", water: 300, price: 20 },
    { id: 24, name: "Fake Zwieblen", type: "DRINK", water: 280, price: 50 },
    { id: 25, name: "Fake Kartoffeln", type: "DRINK", water: 255, price: 60 },
    { id: 26, name: "Fake Tasse Kaffe", type: "DRINK", water: 140, price: 15 },
    { id: 27, name: "Fake Karotten", type: "DRINK", water: 131, price: 30 },
    { id: 28, name: "Fake Tomaten", type: "DRINK", water: 214, price: 20 },
    { id: 29, name: "Fake Tasse Tee", type: "DRINK", water: 30, price: 15 },
    { id: 30, name: "Fake Tomatenmark", type: "DRINK", water: 855, price: 30 },
    { id: 31, name: "Fake Butter", type: "DRINK", water: 553, price: 40 },
  ];

  useEffect(() => {
    document.title = "Shop | Wasserarmsatt";
    fetch("http://localhost:8080/water/items")
      .then((response) => response.json())
      .then((jsondata) => {
        setShopItems(jsondata);
      })
      .catch((err) => {
        console.error(err.message);
        setShopItems(fakeShopItems); //TODO: Delete after
      });
  }, []);

  const [list, setlist] = useState([fakeShopItems])
  return (
    <>
      <Header />

      <main>
        <div className="container-main">
          <div className="container-product">
            <ShopItem onAdd={() => list.map((item) => (
        <li key={item.id}>{item.name} {item.type} {item.water} {item.price}</li>
      ))} shopItems={shopItems} />
          </div>
          <ShoppingCart />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Shop;
