//import Shop from "../routes/Shop";

/**
 * Shopitem UI component
 *
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.7.0
 */

// TODO: fixed sizes good idea?
function ShopItem({ shopItem, onAdd }) {

  /**
   * Returns either a base64 encoded webp from the api,
   * or a fallback image.
   * 
   * @param {String} icon icon from the api
   * @returns api image, or fallback image if icon is null.
   */
  const getIcon = (icon) => {
    return icon
      ? `data:image/webp;base64,${icon}`
      : `missing_textures.webp`;
  };

  return (
    <li>
      <div className="card w-[184px] h-[313px] my-3 bg-[#9EFFB9] bg-opacity-30 shadow-xl">
        <figure className="w-[184px] h-[145px] m-auto">
          <img className="object-cover" src={getIcon(shopItem.icon)} alt={shopItem.name} />
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
