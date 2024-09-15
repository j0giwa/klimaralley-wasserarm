import { useShopContext } from '../lib/context';
import missing_texture from "/missing_textures.webp";

/**
 * Cartitem UI component
 *
 * @author Jonas Schwind
 * @author Walter Dongmepi
 * @version 0.8.5
 */
function CartItem({ cartItems }){

  const { onAdd, onRemove, onRemoveItem } = useShopContext();

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
    <div className="flex row gap-3 w-full dark:backdrop-blur-3xl bg-base-100/70 border-b-2 h-28 py-2">
      {/* image of items element */}
      <div className="content-center">
        <img className="h-full" src={getIcon(cartItems.icon)} alt="image of item"/>
      </div>

      {/* rest of elements */}
      <div className='w-full flex flex-col justify-between'>
        <div className='flex justify-between'>
          {/* name of item plus water */}
          <div>
            <div className="font-semibold text-lg md:text-xl lg:text-2xl">{cartItems.name}</div>
            <p className="text-xs h-fit">{cartItems.qty*cartItems.water} L</p>
          </div>
          {/* remove icon for element */}
          <button onClick={() => onRemoveItem(cartItems)} className='mb-6'>
            <svg width="24" height="24" viewBox="0 0 24 24" className='stroke-base-content' xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1203_4078)">
                <path d="M16.9999 7L7 16.9999"  stroke-width="3" stroke-linecap="round"/>
                <path d="M7 7L16.9999 16.9999"  stroke-width="3" stroke-linecap="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1203_4078">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className='flex justify-between'>
          <div className='flex row gap-2 items-center'>
            <button  onClick={() => onRemove(cartItems)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18" stroke="#CBC9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div>{cartItems.qty} kg</div>
            <button onClick={() => onAdd(cartItems)} className='add'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5" stroke="#CBC9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 12H19" stroke="#CBC9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
          </div>
          <div className='justify-end border-[1px] border-base-content rounded-xl p-1 h-fit'>{cartItems.price*cartItems.qty} 🪙</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
