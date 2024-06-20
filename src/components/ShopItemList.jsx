import ShopItem from './ShopItem';


/**
 * ShopItemList UI component
 *
 * Provides a dashboard like view with ShopItem's
 *
 * @author Jonas Schwind & Alexander Golüke
 * @version 0.7.0
 */


function ShopItemList({ shopItems, onAdd }) {

  return (
    <ul className="flex flex-wrap justify-around">
      {shopItems.map((shopItem) => (
        <ShopItem key={shopItem.id} shopItem={shopItem} onAdd={onAdd} />
      ))}
    </ul>
  );
}

export default ShopItemList;
