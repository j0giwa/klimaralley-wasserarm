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
      <div className="card card-compact w-[184px] h-[350px] my-3 bg-base-300 shadow-xl lg:mx-2">
        <figure>
          <img className="w-full h-48 object-contain" src={getIcon(shopItems.icon)} alt={shopItems.name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{shopItems.name}</h2>
          <p>
            Wasser: <span className="text-info">{shopItems.water} L</span>
          </p>
          <p className="inline-flex items-center">
            <span>Preis:</span>
            <span className="mx-2">{shopItems.price}</span>
            <img className="h-[23px] ml-2" src={coin} alt="Coins" />
          </p>
        </div>
        <div className="card-actions justify-end p-0">
          <button className="btn btn-primary text-white text-xl font-bold w-[37px] h-[41px] rounded-tl-[1rem] rounded-tr-none rounded-bl-none rounded-br-[1rem]"
            onClick={() => onAdd(shopItems)}>
              +
          </button>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
