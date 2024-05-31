/**
 *
 */


function ShopItem({ shopItems }) {
  return (
    <>
      <ul className="flex flex-wrap">
        {shopItems.map((shopItem) => (
	  <li key={shopItem.id}>
	    <div className="card min-w-15 max-w-15 min-h-15 max-h-15 m-3 bg-base-300 shadow-xl">
              <figure className="px-10 pt-8">
	        Image here
              </figure>
              <div className="card-body items-center text-center">
		<div className="flex-row">
		  <div className="badge badge-primary mx-1">{shopItem.price}</div>
		  <div className="badge badge-secondary mx-1">{shopItem.water}</div>
		</div>
		<div className="card-actions">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
	  </li>
	))}
      </ul>
    </>
  )
}

export default ShopItem
