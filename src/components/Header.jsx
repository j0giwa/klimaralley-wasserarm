import SearchBar from './Searchbar';
import ThemeController from './ThemeController';

/**
 * Header UI Component
 * 
 * Provide Header
 * 
 * @param {Object} params 
 * @param {boolean} params.searchBar Whether or not the searchbar should be shown.
 * @param {String} params.categorys Categorys for the searchbar.
 * 
 * @author Marlon Schrader
 * @author R. Walter Dongmepi W.
 * @author Jonas Schwind
 */
function Header({ searchBar, categorys }) {

  return (
    <div className="fixed top-0 left-0 right-0 z-20 w-full px-[16px] py-[24px] bg-base-100 backdrop-blur-3xl">
      <div className="flex items-center justify-between">

        {/* Language change */}
        <details className="dropdown">
          <summary className="btn w-[35px] h-[35px] p-0 bg-transparent border-none shadow-none">
            <img src="public/images/language_image.svg" className="fill-base-content" alt="language icon" />
          </summary>
          <ul className="z-[9000] w-36 h-[110px] flex flex-col justify-between bg-base-100 backdrop-blur-3xl rounded-box dropdown-content">
            <li className="w-full px-[11px] py-[8px]">English</li>
            <li className="w-full px-[11px] py-[8px]">German</li>
          </ul>
        </details>

        {/* Money */}
        <div className="flex justify-between w-[95px] p-2.5 bg-base-200 border-2 border-base-300 rounded-full">
          <p>500</p>
          <span>🪙</span>
        </div>

        {/* Profile */}
        <details className="dropdown dropdown-end">
          <summary className="btn w-[45px] h-[40px] p-0 bg-transparent border-white shadow-none">
            <img src="public/dummyPB.webp" className="rounded-full" alt="avatar icon" />
          </summary>
          <ul className="flex flex-col justify-between menu dropdown-content w-[122px] h-28 px-[16px] py-[20px] z-50 bg-base-100 rounded-box">
            <li>Edit Profile</li>
            <li>Home</li>
            <li>Logout</li>
          </ul>
        </details>
      </div>
      {searchBar && (
        <div className="flex-col px-4 pb-6">
          <SearchBar categories={categorys} />
        </div>
      )}
      <ThemeController />
    </div>
  );
}

export default Header;