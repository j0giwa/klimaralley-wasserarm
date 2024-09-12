import React from "react";
import { useShopContext } from '../lib/context';



/**
 * render the total water and price of all
 * the elements added in the Cart
 * 
 */
function Total() {
    const {shop:{cartItems}} = useShopContext()

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
        <div>
        {cartItems.length !== 0 && (
            <div className="text-center h-20 flex flex-col gap-5">
                <div className="flex justify-between">
                    <p className="">Wasser Insgesamt: <span className="text-info font-semibold">{totalWater} L</span> </p>
                    <p>Gesamtpreis: <span className="text-info font-semibold">{totalPrice} 🪙</span> </p>
                </div>
                <div>
                    <button className="btn btn-secondary font-semibold px-2 rounded-xl w-20" onClick={() => submit(cartItems)}>Bereiten</button>
                </div>
            </div>
          
        )}
      </div>
    )
}

export default Total;