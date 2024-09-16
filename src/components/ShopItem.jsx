import coin from "/icons/Coin.svg";
import missing_texture from "/missing_textures.webp";

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
      : missing_texture;
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
            Wasser: <span className="text-info">{shopItems.water} L</span>
          </p>
        </div>
        <div className="card-actions justify-end p-0">
          <div className="w-full px-[10px] flex flex-col">
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
