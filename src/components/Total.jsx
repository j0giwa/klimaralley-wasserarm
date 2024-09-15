import React, { useState } from "react";
import Alert from './Alert';
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
   * @returns Score
   */
  const submit = async (wasserarmShopItems) => {
        await fetch('http://localhost:8080/water/score', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // TODO: Add authorisation bearer token
        },
        body: JSON.stringify({
            eaterid: 0, // TODO: Change to actual eaterid
            items: wasserarmShopItems
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            setAlertMessage('Ihre Punktzahl ist ' + data.score );
            setAlertType('success');
            console.log(data);
          })
          .catch((err) => { console.error(err.message); })
          .finally(() => {
            setShowAlert(true);
          });
        }

    return (
        <div>
        {cartItems.length !== 0 && (
            <div className="text-center h-20 flex flex-col gap-5">
                {showAlert && <Alert className="z-50" message={alertMessage} type={alertType} onClose={handleCloseAlert} />}
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