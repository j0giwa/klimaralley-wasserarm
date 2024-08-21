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
    <div className="fixed top-0 left-0 right-0 z-20 w-full px-[16px] py-[24px] bg-base-100 dark:bg-base-100/60 dark:backdrop-blur-3xl">
      <div className="flex items-center justify-between">

        {/* Language change */}
        <details className="dropdown">
          <summary className="btn w-[35px] h-[35px] p-0 bg-transparent border-none shadow-none">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8.125C13.8975 8.125 14.625 7.39746 14.625 6.5C14.625 5.60254 13.8975 4.875 13 4.875C12.1025 4.875 11.375 5.60254 11.375 6.5C11.375 7.39746 12.1025 8.125 13 8.125Z" fill="#CBC9C9"/>
              <path d="M13 14.625C13.8975 14.625 14.625 13.8975 14.625 13C14.625 12.1025 13.8975 11.375 13 11.375C12.1025 11.375 11.375 12.1025 11.375 13C11.375 13.8975 12.1025 14.625 13 14.625Z" fill="#CBC9C9"/>
              <path d="M13 21.125C13.8975 21.125 14.625 20.3975 14.625 19.5C14.625 18.6025 13.8975 17.875 13 17.875C12.1025 17.875 11.375 18.6025 11.375 19.5C11.375 20.3975 12.1025 21.125 13 21.125Z" fill="#CBC9C9"/>
          </svg>
          </summary>
          <ul className="z-[9000] w-36 h-20 flex flex-col bg-base-100 backdrop-blur-3xl rounded-box dropdown-content dark:border-base-content dark:border-2">
            <li className="w-fit px-[11px] py-[8px] flex justify-between gap-6">
              <span>Theme</span>
              <ThemeController />
            </li>
            <li className="w-full px-[11px] py-[8px]">Sprache</li>
          </ul>
        </details>

        {/* Money */}
        <div className="flex justify-between w-[95px] p-2.5 bg-base-200 border-2 border-base-300 rounded-full dark:border-base-content dark:border-2">
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
    </div>
  );
}

export default Header;
