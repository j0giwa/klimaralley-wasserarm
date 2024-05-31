function ShopItem({ shopItem }) {
  return (
    <li>
      <div className="card w-[184px] h-[313px] my-3 bg-[#9EFFB9] bg-opacity-30 shadow-xl">
        <figure className="w-[184px] h-[145px] m-auto">
          <img src="test.png" alt={shopItem.name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{shopItem.name}</h2>
          <div>
            <span>
              Wasserverbrauch: <span className="text-primary">{shopItem.water}</span>
            </span>
          </div>
        </div>
        <div className="card-actions justify-end p-0">
          <button className="btn btn-outline btn-primary w-[37px] h-[28px]">+</button>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
