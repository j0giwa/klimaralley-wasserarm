import { useState, useEffect } from 'react';
import { useShopContext } from '../lib/context';
import {getCookie} from "../lib/cookieUtils";
import Alert from './Alert';

/**
 * render the total water and price of all
 * the elements added in the Cart
 * 
 *  @author R. Walter Dongmepi W.
 */
function Total() {

  const {shop:{cartItems}, coins, ccoins, setCoins, setCcoins, eater} = useShopContext()

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalWater = cartItems.reduce((a, c) => a + c.water * c.qty, 0);

  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const jwtToken = getCookie("jwt");
    if (jwtToken) {
      setAuthToken(jwtToken);
    }
  }, []);

  /** @type {String} */
  const [alertMessage, setAlertMessage] = useState('');
  /** @type {String} */
  const [alertType, setAlertType] = useState('');
  /** @type {boolean} */
  const [showAlert, setShowAlert] = useState(false);
  
  const handleCloseAlert = () => {
    setAlertMessage('');
    setAlertType('');
    setShowAlert(false);
  };

  /**
   * Send the game state to backend for evaluation.
   *
   * @param {ShopItem[]} wasserarmShopItems
   * @returns {Promise<number>} Score
   */
  const submit = async (wasserarmShopItems) => {
    const api = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    const method = '/water/score';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (totalPrice <= ccoins && totalWater <= coins) {

      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      console.log(eater);

      try {
        const response = await fetch(`${api}${method}`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            eaterid: eater.id,
            items: wasserarmShopItems
          }),
        });

        const data = await response.json();
        setCcoins(ccoins-totalPrice);
        setCoins(coins-totalWater)
        setAlertMessage('Ihre Punktzahl ist ' + data.score);
        setAlertType('success');
        return data.score; // Return the score
      } catch (err) {
        console.error(err.message);
      } finally {
        setShowAlert(true);
      }
    } else if (totalPrice > ccoins && totalWater > coins) {
      setAlertMessage(`Reicht nicht aus!! Du brauchst genug Geld und Wasser!!`)
      setAlertType('error');
      setShowAlert(true);
    }
    else if (totalPrice > ccoins) {
      setAlertMessage(`Unzureichende Geld! (Gesamtpreis: ${totalPrice}, Verfügbare Geld: ${ccoins})`);
      setAlertType('error');
      setShowAlert(true);
    } else if (totalWater > coins) {
      setAlertMessage(`Unzureichende Wassermenge! Schade (Gesamtwasser: ${totalWater}, Verfügbare Wassermenge: ${coins})`);
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <>
      {
        cartItems.length !== 0 && (
          <div className="text-center h-20 flex flex-col gap-5">
            {showAlert && <Alert className="z-50" message={alertMessage} type={alertType} onClose={handleCloseAlert} />}
            <div className="flex justify-between">
              <p>Wasser Insgesamt: <span className="text-info font-semibold">{totalWater} L</span> </p>
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