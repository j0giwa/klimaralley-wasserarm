import ShopItem from './ShopItem';
import { useShopContext } from "../lib/context"
/**
 * ShopItemList UI component
 *
 * Provides a dashboard like view with ShopItem's
 *
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.7.0
 */
function ShopItemList() {
  const {shop:{shopItems}, onAdd} = useShopContext()
  return (
     <ul className="flex flex-wrap justify-around py-4">
      {shopItems.map((shopItems) => (
        <ShopItem key={shopItems.id} shopItems={shopItems} onAdd={onAdd} />
      ))}
    </ul>
  );
}

export default ShopItemList;
