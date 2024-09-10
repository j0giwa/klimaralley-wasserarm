import React from 'react';
import CartItem from './CartItem';
import { useShopContext } from '../lib/context';

/**
 * Functions of the shopping card
 *
 * @author Alexander Golüke
 * @author Jonas Schwind
 * @author Rahaman Walter Dongmepi Wendji
 * @version 0.6.0
 */
function ShoppingCart() {

     const {shop:{cartItems}, onAdd, onRemove} = useShopContext() 
     console.log("from shopping cart: ", cartItems) 


  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalWater = cartItems.reduce((a, c) => a + c.water * c.qty, 0);

  /**
   * Send the game state to backend for evaluation.
   *
   * @param {ShopItem[]} wasserarmShopItems
   * @returns Score
   */
  const submit = async (wasserarmShopItems) => {
    await fetch('http://localhost:8080/water/score', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eaterid: 0,
        items: wasserarmShopItems
      }),
    })
    .then((response) => response.json())
    .then((data) => { console.log(data); })
    .catch((err) => { console.error(err.message); });
  }

  return (
    <div className='w-full mt-28 px-1 h-full'>
      {cartItems.length === 0 && <div className="text-center text-2xl font-semibold align-middle">Warenkorb ist leer</div>}
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItems={item} />
      ))}
      <div>
        {cartItems.length !== 0 && (
          <div>
            <div>Wasser Insgesamt: {totalWater} L</div>
            <div>Gesamtpreis: {totalPrice} 🪙</div>
            <button onClick={() => submit(cartItems)}>Senden</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
