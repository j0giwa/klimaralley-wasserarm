

/**
 * Skeleton Placeholder of the ShopItemList to display while Shop page is loading.
 *
 * @param {Object} ShopItemListSkeleton 
 * @param {number} ShopItemListSkeleton.length
 * @author Jonas Schwind
 * @version 1.0.0
 */
function ShopItemListSkeleton({length}) {

  return (
    <ul className="flex flex-wrap justify-around py-4">
      {Array(length).fill(0).map((item, i) =>
      <li key={i}>
          <div className="card w-[184px] h-[313px] my-3 bg-base-300 shadow-xl">
          <figure className="w-[184px] h-[145px] m-auto skeleton skeleton-wave">
            <div className="skeleton w-full h-full bg-base-300"></div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title skeleton skeleton-text w-3/4 h-6 bg-base-300 rounded"/>
              <p className="skeleton skeleton-text w-1/2 h-4 mt-2 bg-base-300 rounded"/>
          </div>
          <div className="card-actions justify-end p-0">
            <button className="skeleton skeleton-btn bg-base-300 w-[37px] h-[41px] rounded-tl-[1rem] rounded-tr-none rounded-bl-none rounded-br-[1rem]" />
          </div>
        </div>
      </li>)}
    </ul>
  );
}

export default ShopItemListSkeleton;