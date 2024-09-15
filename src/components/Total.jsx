import { useState, useEffect } from "react";
import { useShopContext } from '../lib/context';
import {getCookie} from "../lib/cookieUtils"

/**
 * render the total water and price of all
 * the elements added in the Cart
 * 
 *  @author R. Walter Dongmepi W.
 */
function Total() {

  const {shop:{cartItems}} = useShopContext()

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalWater = cartItems.reduce((a, c) => a + c.water * c.qty, 0);

  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const jwtToken = getCookie("jwt");
    if (jwtToken) {
      console.log(jwtToken);
      setAuthToken(jwtToken);
    }
  }, []);

  /**
   * Send the game state to backend for evaluation.
   *
   * @param {ShopItem[]} wasserarmShopItems
   * @returns Score
   */
  const submit = async (wasserarmShopItems) => {
    
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    await fetch('http://localhost:8080/water/score', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        eaterid: 0, // TODO: Add eater id of actual eater.
        items: wasserarmShopItems
      }),
    })
    .then((response) => response.json())
    .then((data) => { console.log(data); })
    .catch((err) => { console.error(err.message); });
  }

  return (
    <>
      {
        cartItems.length !== 0 && (
          <div className="text-center h-20 flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="">Wasser Insgesamt: <span className="text-info font-semibold">{totalWater} L</span> </p>
                <p>Gesamtpreis: <span className="text-info font-semibold">{totalPrice} 🪙</span> </p>
            </div>
            <div>
              <button className="btn btn-secondary font-semibold px-2 rounded-xl w-20" onClick={() => submit(cartItems)}>Bereiten</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Total;