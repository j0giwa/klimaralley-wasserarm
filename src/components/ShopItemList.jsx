import ShopItem from './ShopItem';

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

