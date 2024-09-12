import React, { useState } from 'react';
import CartItem from './CartItem';
import Alert from './Alert';
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

    

    const {shop:{cartItems}} = useShopContext() 
    
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
    return (
    <div className="w-full mt-[108px] px-1 h-full ">
      {showAlert && <Alert className="z-50" message={alertMessage} type={alertType} onClose={handleCloseAlert} />}
      {cartItems.length === 0 && <div className="text-2xl font-semibold py-48 px-0 top-1/2 left-1/2 text-center"><p>Warenkorb ist leer</p></div>}
      <div className="mt-48">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
