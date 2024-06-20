import ShopItem from './ShopItem';
import { useState } from 'react';


/**
 * ShopItemList UI component
 *
 * Provides a dashboard like view with ShopItem's
 *
 * @author Jonas Schwind
 * @version 0.6.0
 */

 
function ShopItemList({ shopItems }) {
  return (
    <ul className="flex flex-wrap justify-around mt-[88px]">
      {shopItems.map((shopItem) => (
        <ShopItem key={shopItem.id} shopItem={shopItem} />
      ))}
    </ul>
  );
}

export default ShopItemList;
