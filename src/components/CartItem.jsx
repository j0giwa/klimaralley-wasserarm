import React from "react";

/**
 * Cartitem UI component
 *
 * @author Jonas Schwind & Walter Dongmepi
 * @version 0.8.5
 */

function CartItem({ cartItem, onAdd, onRemove }){

  return (
    <div className="row">
      <div>{cartItem.name}</div>
      <div>
        <button onClick={() => onAdd(cartItem)} className='add'>
          +
        </button>
        <button onClick={() => onRemove(cartItem)} className='remove'>
          -
        </button>
      </div>
      <div>
        Wasser pro Kilogramm: {cartItem.water}L
      </div>
      <div>
        {cartItem.qty} x {cartItem.price} 🪙
      </div>
    </div>
  );
}

export default CartItem;
