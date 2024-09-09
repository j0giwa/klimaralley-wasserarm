import { createContext, useContext, useState } from "react";

export const ShopContext = createContext()

/**
 * function that avoid drilling into element. 
 * give the possibilitie to use variable in the entire project within props.
 * In this case Shop, ShoppingCart and Cart will use it
 *
 * @author R. Walter Dongmepi W.
 * @version 0.5.0
 */
export function ShopContextProvider ({children}) {

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
    const [shop, setShop] = useState({shopItems:[], cartItems:[]});

    /** @type {ShopItem[]} */
    /* const [cartItems, setCartItems] = useState([]); */

    /**
     * Looks if the item is already in the cart and if so will add the quantity.
     * Else it will add the item
     *
     * @param {ShopItem} shopItem
     */
    const onAdd = (shopItem) => {
        const exist = shop.cartItems.find((x) => x.id === shopItem.id);
        if (exist) {
        setShop(state => ({...state,cartItems:state.cartItems.map((x) =>
          x.id === shopItem.id ? { ...exist, qty: exist.qty + 1 } : x
          )})
        );
        } else {
        setShop(state => ({...state,cartItems:[...state.cartItems, { ...shopItem, qty: 1 }]}));
        }
    };

    /**
   * Looks if the item is only one and if so it will be removed complitly.
   * Else it will remove one from the quantity.
   *
   * @param {ShopItem} shopItem
   */
  const onRemove = (shopItem) => {
    const exist = cartItems.find((x) => x.id === shopItem.id);
    if (exist.qty === 1) {
      setShop(state =>({...state, cartItems:state.cartItems.filter((x) => x.id !== shopItem.id)}));
    } else {
      setShop(state =>({...state,cartItems:state.cartItems.map(x => x.id === shopItem.id ? { ...exist, qty: exist.qty - 1 } : x
      )})
      );
    }
  };

  return (
        <ShopContext.Provider value={{shop, setShop, onAdd, onRemove}}>
          {children}
        </ShopContext.Provider>
  )
}

export function useShopContext() {
    const context = useContext(ShopContext)
    if (!context) {
        throw new Error (
            "useShopContext must be used within a ShopContextProvider"
        );
    } 
    return context;
}