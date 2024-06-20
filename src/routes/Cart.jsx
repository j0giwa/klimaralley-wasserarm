import React from 'react';

/**"
 * Functions of the shopping card
 *
 * @author Alexander Golüke
 * @version 0.6.0
 */
export default function ShoppingCart({ cartItems, onAdd, onRemove }) {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalWater = cartItems.reduce((a, c) => a + c.water * c.qty, 0)
    return (

        <aside className="block col-1">
            <h1>Warenkorb</h1>
            <div>{cartItems.length === 0 && <div>Warenkorb ist leer </div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)} className='add'>
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className='remove'>
                            -
                        </button>
                    </div>
                    <div>
                        Wasser pro Kilogramm: {item.water}L
                    </div>
                    <div>
                        {item.qty} x {item.price} 🪙
                    </div>

                </div>

            ))}
            <div>{cartItems.length !== 0 && (

                <>
                    <hr></hr>
                    <div>
                        Wasser Insgesamt: {totalWater}L
                    </div>
                    <div>
                        Gesamtpreis: {totalPrice} 🪙
                    </div>

                </>
            )}
            </div>
        </aside>
    );
}
