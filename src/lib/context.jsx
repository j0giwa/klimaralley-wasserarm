import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "../lib/cookieUtils";
export const ShopContext = createContext();

/**
 * function that avoid drilling into element.
 * give the possibilitie to use variable in the entire project within props.
 * In this case Shop, ShoppingCart and Cart will use it
 *
 * @author R. Walter Dongmepi W.
 * @version 0.5.0
 */
export function ShopContextProvider({ children }) {

  /** @type {String} */
  const [authToken, setAuthToken] = useState("");

  /**
   * Water quantity of the user.
   * @type {number} water quantity - The quantity of water the user has.
   */
  const [coins, setCoins] = useState(() => {
    const savedWater = localStorage.getItem("water");
    return savedWater ? JSON.parse(savedWater) : 0;
  });

  /**
   * The coins of the user
   * @type {number} coins - The amount of coins the user has.
   *  */
  const [ccoins, setCcoins] = useState(() => {
    const savedCoins = localStorage.getItem("coins");
    return savedCoins ? JSON.parse(savedCoins) : 0;
  });

  /**
   * Represents an array of ShopItems for the shop.
   *
   * @typedef {Object} ShopItem
   * @property {number} id - The ID of the object.
   * @property {String} name - Name of the product.
   * @property {ItemType} type - Type (Kategory) of the product.
   * @property {number} water - waterusage of the product.
   * @property {number} price - price of the product.
   */

  /** @type {{shopItems:ShopItem[], cartItems:ShopItem[]}} */
  const [shop, setShop] = useState({ shopItems: [], cartItems: [] });

  // Authorisation token
  useEffect(() => {
    const jwtToken = getCookie("jwt");
    if (jwtToken) {
      setAuthToken(jwtToken);
    }
  }, []);

  // make shure to fetch data from the local storage of the browser after the reload of the webpage
  useEffect(() => {

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    setShop((state) => {
      if (!cartItems) {
        return state;
      }
      return {
        ...state,
        cartItems,
      };
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(shop.cartItems));
  }, [shop.cartItems]);

  // Keep track of water
  useEffect(() => {
    const api = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    const method = '/water/water';

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    fetch(`${api}${method}`, {
      method: 'GET',
      headers: headers
    })
    .then((response) => response.json())
    .then((data) => {
      setCoins(data.water);
    })
    .catch((err) => {
      console.error(err.message);
    });

    localStorage.setItem("water", JSON.stringify(coins));
  }, [coins]);

  const sendWaterData = async (ammount) => {
    const api = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    const method = '/water/water';

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    await fetch(`${api}${method}?Amount=${ammount}`, {
      method: 'PATCH',
      headers: headers
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Water update Response data:', data);
      setCoins(data.water);
      localStorage.setItem("water", JSON.stringify(data.water));
    })
    .catch((err) => {
      console.error(err.message);
    });
  };

  // Keep track of coins
  useEffect(() => {
    const api = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    const method = '/water/coins';

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    fetch(`${api}${method}`, {
      method: 'GET',
      headers: headers
    })
    .then((response) => response.json())
    .then((data) => {
      setCcoins(data.coins);
    })
    .catch((err) => {
      console.error(err.message);
    });

    localStorage.setItem("coins", JSON.stringify(ccoins));
  }, [ccoins]);
  
  /**
   * Looks if the item is already in the cart and if so will add the quantity.
   * Else it will add the item
   *
   * @param {ShopItem} shopItem
   */
  const onAdd = (shopItem) => {
    setShop((state) => {
      const exist = state.cartItems.find((x) => x.id === shopItem.id);
      const cartItems = exist
        ? [
            ...state.cartItems.map((x) =>
              x.id === shopItem.id ? { ...exist, qty: exist.qty + 1 } : x
            ),
          ]
        : [...state.cartItems, { ...shopItem, qty: 1 }];

      return {
        ...state,
        cartItems,
      };
    });
  };

  /**
   * Looks if the item is only one and if so it will be removed complitly.
   * Else it will remove one from the quantity.
   *
   * @param {ShopItem} shopItem
   */
  const onRemove = (shopItem) => {
    setShop((state) => {
      const exist = state.cartItems.find((x) => x.id === shopItem.id);

      if (!exist) {
        return state;
      }

      const cartItems =
        exist.qty > 1
          ? state.cartItems.map((x) =>
              x.id === shopItem.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          : state.cartItems.filter((x) => x.id !== shopItem.id);

      return {
        ...state,
        cartItems,
      };
    });
  };

  //Remove the item from the shopping cart, no matter how much the quantity is.
  const onRemoveItem = (shopItem) => {
    setShop((state) => {
      const cartItems = state.cartItems.filter((x) => x.id !== shopItem.id);
      return {
        ...state,
        cartItems,
      };
    });
  };

  return (
    <ShopContext.Provider
      value={{ shop, setShop, onAdd, onRemove, onRemoveItem, coins, setCoins, ccoins, setCcoins, sendWaterData }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShopContext() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
}
