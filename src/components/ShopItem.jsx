import coin from "/icons/Coin.svg";

/**
 * Shopitem UI component
 *
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.8.5
 */
// TODO: fixed sizes good idea?
function ShopItem({ shopItems, onAdd }) {

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
      <div className="card w-[184px] h-[313px] my-3 bg-base-300 shadow-xl lg:mx-2">
        <figure className="w-[184px] h-[145px] m-auto">
          <img className="object-cover" src={getIcon(shopItems.icon)} alt={shopItems.name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{shopItems.name}</h2>
          <p>
            Wasser: <span className="text-info">{shopItems.water}</span>
          </p>
        </div>
        <div className="card-actions justify-end p-0">
          <div className="w-full px-[10px] flex flex-col">
            <div className="w-full flex justify-between items-center">
              <span>Menge</span>
              <div className="flex items-center gap-2">
                  <div className="btn btn-ghost bg-transparent border-none p-0 py-0 rounded-full">
                    <svg className="stroke-base-content" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12H18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p>{shopItems.qty} kg</p>
                  <div className="btn btn-ghost p-0 rounded-full">
                    <svg className="stroke-base-content" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 19V5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5 12H19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
            </div>
             <div className="flex justify-between">
              Preis : 
              <div className="flex ">
                <span>{shopItems.price}</span> 
                <img className="h-[23px]" src={coin} alt="Coins"></img>
              </div>
             </div>
          </div>
          <div>
            <button className="btn btn-primary text-white text-xl font-bold w-[37px] h-[41px] rounded-tl-[1rem] rounded-tr-none rounded-bl-none rounded-br-[1rem]"
              onClick={() => onAdd(shopItems)}>
                +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
