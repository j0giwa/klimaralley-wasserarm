import React, { useEffect } from 'react';
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

    

    const {shop:{cartItems}} = useShopContext() 
  	
  return (
    <div className="w-full mt-[108px] px-1 h-full ">
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
