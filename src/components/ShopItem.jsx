
/**
 * Shopitem UI component
 *
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.8.5
 */
// TODO: fixed sizes good idea?
function ShopItem({ shopItem, onAdd }) {

  /**
   * Returns either a base64 encoded webp from the api,
   * or a fallback image.
   * 
   * @param {String} icon icon from the api
   * @returns base64 api image, or path to fallback image if icon is null.
   */
  const getIcon = (icon) => {
    return icon
      ? `data:image/webp;base64,${icon}`
      : `missing_textures.webp`;
  };

  return (
    <li>
      <div className="card w-[184px] h-[313px] my-3 bg-base-300 shadow-xl dark:border-base-content dark:border-2">
        <figure className="w-[184px] h-[145px] m-auto">
          <img className="object-cover" src={getIcon(shopItem.icon)} alt={shopItem.name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{shopItem.name}</h2>
          <p>
            Wasser: <span className="text-info">{shopItem.water}</span>
          </p>
        </div>
        <div className="card-actions justify-end p-0">
          <div className="w-full py-[8px] px-[10px] flex justify-between">
             <span>Menge</span>
             <div className="flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18" stroke="#CBC9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>kg</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5" stroke="#CBC9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 12H19" stroke="#CBC9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             </div>
          </div>
          <div>
            <button className="btn btn-primary text-white text-xl font-bold w-[37px] h-[41px] rounded-tl-[1rem] rounded-tr-none rounded-bl-none rounded-br-[1rem]"
              onClick={() => onAdd(shopItem)}>
                +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
