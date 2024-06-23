/**
 * Shopitem UI component
 *
 * @author Jonas Schwind & Alexander Golüke
 * @version 0.7.0
 */

//import Shop from "../routes/Shop";

// TODO: fixed sizes good idea?
function ShopItem({ shopItem, onAdd }) {
  return (
    <li>
      <div className="card w-[184px] h-[313px] my-3 bg-[#9EFFB9] bg-opacity-30 shadow-xl">
        <figure className="w-[184px] h-[145px] m-auto">
          {/* TODO: maybe get picture from backend */}
          <img className="object-cover" src={`data:image/webp;base64,${shopItem.icon}`} alt={shopItem.name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{shopItem.name}</h2>
          <p>
            Wasser: <span className="text-primary">{shopItem.water}</span>
          </p>
        </div>
        <div className="card-actions justify-end p-0">
          <div className="w-full px-[8px] px-[10px]">
            Quantity
          </div>
          <div>
            <button onClick={() => onAdd(shopItem)} className="btn btn-outline btn-primary w-[37px] h-[41px] rounded-tl-[1rem] rounded-tr-none rounded-bl-none rounded-br-[1rem] font-bold text-xl">+</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
