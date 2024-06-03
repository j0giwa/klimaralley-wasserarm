import ShopItem from './ShopItem';


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
    <ul className="flex flex-wrap justify-around">
      {shopItems.map((shopItem) => (
        <ShopItem key={shopItem.id} shopItem={shopItem} />
      ))}
    </ul>
  );
}

export default ShopItemList;