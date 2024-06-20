import { useState, useEffect } from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopItemList from "../components/ShopItemList";

/**
 * Shop page (main part) of the wasserarm-satt game
 *
 * @author Jonas Schwind & Alexander Golüke
 * @version 0.6.0
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

  const [cartItems, setCartItems] = useState([]);


  // Used for ui programming without backend connection TODO: delete after
  const fakeShopItems = [
    { id: 0, name: "Fake", type: "DRINK", water: 0, price: 0 },
    { id: 1, name: "Röstkaffe", type: "DRINK", water: 21000, price: 50 },
    { id: 2, name: "Rindfleisch", type: "MEAT", water: 15455, price: 200 },
    {
      id: 3,
      name: "Schokolade",
      type: "ANINAL_PRODUCT",
      water: 17196,
      price: 50,
    },
    { id: 4, name: "Käse", type: "ANINAL_PRODUCT", water: 5000, price: 100 },
    { id: 5, name: "Schweinefleisch", type: "MEAT", water: 15455, price: 100 },
    { id: 6, name: "Hühnerfleisch", type: "MEAT", water: 3900, price: 120 },
    { id: 7, name: "Reis", type: "VEGETABLE", water: 3470, price: 60 },
    { id: 8, name: "Ei", type: "ANINAL_PRODUCT", water: 3300, price: 10 },
    { id: 9, name: "Olivenöl", type: "VEGETABLE", water: 14725, price: 200 },
    { id: 10, name: "Rapsöl", type: "VEGETABLE", water: 4300, price: 150 },
    { id: 11, name: "Avocado", type: "VEGETABLE", water: 2000, price: 200 },
    { id: 12, name: "Salat", type: "VEGETABLE", water: 237, price: 100 },
    { id: 13, name: "Gurke", type: "VEGETABLE", water: 353, price: 100 },
    { id: 14, name: "Zucker", type: "VEGETABLE", water: 1500, price: 30 },
    { id: 15, name: "Spargel", type: "VEGETABLE", water: 1473, price: 80 },
    { id: 16, name: "Brot", type: "ANINAL_PRODUCT", water: 1340, price: 120 },
    { id: 17, name: "Weizen", type: "VEGETABLE", water: 1000, price: 30 },
    { id: 18, name: "Milch", type: "ANINAL_PRODUCT", water: 1000, price: 50 },
    { id: 19, name: "Wein", type: "DRINK", water: 1000, price: 180 },
    { id: 20, name: "Apfelsaft", type: "DRINK", water: 950, price: 30 },
    { id: 21, name: "Mais", type: "DRINK", water: 900, price: 40 },
    { id: 22, name: "Orangensaft", type: "DRINK", water: 850, price: 20 },
    { id: 23, name: "Bier", type: "DRINK", water: 300, price: 20 },
    { id: 24, name: "Zwieblen", type: "DRINK", water: 280, price: 50 },
    { id: 25, name: "Kartoffeln", type: "DRINK", water: 255, price: 60 },
    { id: 26, name: "Tasse Kaffe", type: "DRINK", water: 140, price: 15 },
    { id: 27, name: "Karotten", type: "DRINK", water: 131, price: 30 },
    { id: 28, name: "Tomaten", type: "DRINK", water: 214, price: 20 },
    { id: 29, name: "Tasse Tee", type: "DRINK", water: 30, price: 15 },
    { id: 30, name: "Tomatenmark", type: "DRINK", water: 855, price: 30 },
    { id: 31, name: "Butter", type: "DRINK", water: 553, price: 40 },
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


  //Looks if the item is already in the cart and if so will add the quantity. Else it will add the item
  const onAdd = (shopItem) => {
    const exist = cartItems.find((x) => x.id === shopItem.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === shopItem.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...shopItem, qty: 1 }]);
    }
  };


  //Looks if the item is only one and if so it will be removed complitly. Else it will remove one from the quantity
  const onRemove = (shopItem) => {
    const exist = cartItems.find((x) => x.id === shopItem.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== shopItem.id));
    } else {
      setCartItems(cartItems.map(x => x.id === shopItem.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      );
    }
  };



  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ShopItemList
            shopItems={shopItems}
            onAdd={onAdd} />
          <div className="container-main">
          </div>
        </div>
      </main>
      <Footer
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove} />
    </>
  );
}

export default Shop;
