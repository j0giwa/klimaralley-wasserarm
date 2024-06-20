import React, { Component } from 'react';
import Shop from './Shop';

/**"
 * Funktions of the shopping card
 *
 * @author Alexander Golüke
 * @version 0.1.0
 */
function ShoppingCart() {
    return (
        <div>
            <h1>Warenkorb</h1>
            {Shop.list.map(item => <div key={item.id}>{item.name} {item.type} {item.water} {item.price}</div>)}
        </div>
    );
}

export default ShoppingCart;