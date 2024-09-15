import ShopItem from './ShopItem';
import { useShopContext } from "../lib/context"
import { useParams } from "react-router-dom";

/**
 * ShopItemList UI component
 *
 * Provides a dashboard like view with ShopItem's
 *
 * @author R. Walter Dongmepi Wendji
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.7.0
 */
function ShopItemList() {
  const {shop:{shopItems}, onAdd} = useShopContext();

  const params = useParams();
  console.log(params)

  //Filter shopItems based on the selected category
  const filteredItems = !params.category || params.category === "all" ?
  shopItems : shopItems.filter(item => item.type === params.category);

  return (
     <ul className="flex flex-wrap justify-around py-4">
      {filteredItems.map((item) => (
        <ShopItem key={item.id} value={params.category} shopItems={item} onAdd={onAdd} />
      ))}
    </ul>
  );
}

export default ShopItemList;
