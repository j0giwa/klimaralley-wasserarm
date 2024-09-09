import React from 'react';
import CartItem from './CartItem';
import { useShopContext } from '../lib/context';

/**
 * Functions of the shopping card
 *
 * @author Alexander Golüke
 * @author Jonas Schwind
 * @version 0.6.0
 */
function ShoppingCart() {

 /*  const { cartItems, onAdd, onRemove } = useContext(ShopContext) */
     const {shop:{cartItems}, onAdd, onRemove} = useShopContext()  


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
    <aside className="block col-1">
      <h1>Warenkorb</h1>
      <div>{cartItems.length === 0 && <div>Warenkorb ist leer</div>}</div>
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} onAdd={onAdd} onRemove={onRemove} />
      ))}
      <div>
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div>Wasser Insgesamt: {totalWater}L</div>
            <div>Gesamtpreis: {totalPrice} 🪙</div>
          </>
        )}
      </div>
      <div>
        <button onClick={() => submit(cartItems)}>Senden</button>
      </div>
    </aside>
  );
}

export default ShoppingCart;
