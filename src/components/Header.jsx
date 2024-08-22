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
    <div className="fixed top-0 left-0 right-0 z-20 w-full px-4 py-6 bg-base-100 dark:bg-base-100/40 dark:backdrop-blur-3xl">
      <div className="flex items-center justify-between pb-6">

        {/* Language change */}
        <details className="dropdown">
          <summary className="btn w-[35px] h-[35px] px-0 bg-transparent border-none shadow-none">
            <svg className='fill-base-content' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8.125C13.8975 8.125 14.625 7.39746 14.625 6.5C14.625 5.60254 13.8975 4.875 13 4.875C12.1025 4.875 11.375 5.60254 11.375 6.5C11.375 7.39746 12.1025 8.125 13 8.125Z"/>
                <path d="M13 14.625C13.8975 14.625 14.625 13.8975 14.625 13C14.625 12.1025 13.8975 11.375 13 11.375C12.1025 11.375 11.375 12.1025 11.375 13C11.375 13.8975 12.1025 14.625 13 14.625Z"/>
                <path d="M13 21.125C13.8975 21.125 14.625 20.3975 14.625 19.5C14.625 18.6025 13.8975 17.875 13 17.875C12.1025 17.875 11.375 18.6025 11.375 19.5C11.375 20.3975 12.1025 21.125 13 21.125Z"/>
            </svg>
          </summary>
          <ul className="z-[9000] w-36 flex flex-col bg-base-200 backdrop-blur-3xl rounded-box dropdown-content px-3 py-5 gap-2">
            <li className="w-fit flex gap-6">
              <span>Theme</span>
              <ThemeController />
            </li>
            <li className="w-full flex justify-between">
              <span>Sprache</span>
              <svg width="24" height="24" viewBox="0 0 16 17" className='fill-base-content' xmlns="http://www.w3.org/2000/svg">
                <path d="M5.17541 10.6763H2.00291C1.53558 10.6759 1.0875 10.4843 0.757043 10.1436C0.42659 9.80289 0.240779 9.34091 0.240405 8.85908V2.31719C0.240779 1.83536 0.42659 1.37337 0.757043 1.03267C1.0875 0.691962 1.53558 0.500385 2.00291 0.5H8.34792C8.81525 0.500385 9.26333 0.691962 9.59378 1.03267C9.92424 1.37337 10.11 1.83536 10.1104 2.31719V5.58813H9.40542V2.31719C9.40505 2.02814 9.29351 1.75104 9.09527 1.54665C8.89703 1.34226 8.62827 1.22726 8.34792 1.22688H2.00291C1.72256 1.22726 1.45379 1.34226 1.25555 1.54665C1.05731 1.75104 0.94578 2.02814 0.945407 2.31719V8.85908C0.94578 9.14813 1.05731 9.42523 1.25555 9.62962C1.45379 9.83401 1.72256 9.94901 2.00291 9.94939H5.17541V10.6763ZM5.14862 7.17927C4.36511 7.80646 3.45945 8.25177 2.49359 8.48474L2.32298 7.77967C3.16069 7.57759 3.94859 7.19839 4.63679 6.66609C3.80238 5.75935 3.22921 4.63105 2.98145 3.40751H2.35541V2.68063H4.66711L4.28359 2.28521L4.78202 1.77131L5.66327 2.68063H7.99542V3.40751H7.35105C7.17593 4.22068 6.86433 4.99605 6.43031 5.69862C5.84158 6.01404 5.38518 6.54072 5.14721 7.17927H5.14862ZM5.17118 6.174C5.88879 5.4036 6.3915 4.44785 6.62631 3.40751H3.71042C3.94727 4.4483 4.4519 5.404 5.17118 6.174ZM15.7504 14.6356V8.17073C15.753 7.92854 15.7091 7.68823 15.6212 7.46362C15.5333 7.23902 15.4032 7.03458 15.2383 6.86207C15.0734 6.68957 14.877 6.55242 14.6605 6.45853C14.444 6.36463 14.2116 6.31586 13.9766 6.31501H7.68028C7.2031 6.31559 6.74562 6.51128 6.4082 6.85917C6.07078 7.20706 5.88097 7.67874 5.88041 8.17073V14.6356C5.88097 15.1276 6.07078 15.5992 6.4082 15.9471C6.74562 16.295 7.2031 16.4907 7.68028 16.4913H13.9506C14.4277 16.4907 14.8852 16.295 15.2226 15.9471C15.5601 15.5992 15.7499 15.1276 15.7504 14.6356ZM13.9766 7.04189C14.26 7.04208 14.5318 7.15824 14.7322 7.36485C14.9326 7.57146 15.0452 7.85164 15.0454 8.14383V14.6625C15.0452 14.9547 14.9326 15.2348 14.7322 15.4414C14.5318 15.648 14.26 15.7642 13.9766 15.7644H7.6542C7.3708 15.7642 7.09906 15.648 6.89866 15.4414C6.69827 15.2348 6.5856 14.9547 6.58542 14.6625V8.14383C6.5856 7.85164 6.69827 7.57146 6.89866 7.36485C7.09906 7.15824 7.3708 7.04208 7.6542 7.04189H13.9766ZM12.506 12.8569H9.12483L8.30773 14.4778L7.6831 14.1435L10.8154 7.92504L13.9477 14.1435L13.3231 14.4778L12.506 12.8569ZM12.1394 12.13L10.8154 9.50236L9.49143 12.13H12.1394ZM3.76541 15.7717C3.39163 15.7711 3.03331 15.6177 2.76901 15.3452C2.5047 15.0727 2.35597 14.7033 2.35541 14.3179V12.6439L3.51584 13.8404L4.01428 13.3265L2.00714 11.2578L0 13.3265L0.498436 13.8404L1.65041 12.6534V14.3194C1.65097 14.8975 1.87398 15.4518 2.2705 15.8607C2.66702 16.2695 3.20465 16.4994 3.76541 16.5H5.2163V15.7731L3.76541 15.7717ZM15.5009 3.15092L14.3404 4.34736V2.68063C14.3399 2.10247 14.1169 1.54815 13.7203 1.13933C13.3238 0.730507 12.7862 0.500577 12.2254 0.5H10.8154V1.22688H12.2254C12.5992 1.22745 12.9575 1.3808 13.2218 1.65331C13.4861 1.92581 13.6349 2.29525 13.6354 2.68063V4.33863L12.4835 3.15019L11.985 3.66409L13.9922 5.73424L16 3.66409L15.5009 3.15092Z" />
              </svg>
            </li>
          </ul>
        </details>

        {/* Money */}
        <div className="flex justify-between w-[95px] p-2.5 bg-base-200 border-2 border-base-300 rounded-full">
          <p>500</p>
          <span>🪙</span>
        </div>

        {/* Profile */}
        <details className="dropdown dropdown-end">
          <summary className="btn w-[45px] h-[40px] p-0 bg-transparent rounded-full border-none shadow-none">
            <img src="public/dummyPB.webp" className="rounded-full" alt="avatar icon" />
          </summary>
          <ul className="flex flex-col justify-between menu dropdown-content w-[122px] h-28 px-[16px] py-[20px] z-50 bg-base-300 border-base-content border-2 rounded-box">
            <li>Edit Profile</li>
            <li>Home</li>
            <li>Logout</li>
          </ul>
        </details>
      </div>
      {searchBar && (
        <div className="flex-col">
          <SearchBar categories={categorys} />
        </div>
      )}
    </div>
  );
}

export default Header;
