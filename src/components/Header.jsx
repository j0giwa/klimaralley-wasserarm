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
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="fill-base-content"
                 width="24" height="24"
                 viewBox="0 0 24 24" >
              <path fill-rule="evenodd"  
                d="M8.00018 15H3.50018C2.8373 14.9995 2.20172 14.7359 1.733 14.2672C1.26427 13.7985 1.00071 13.1629 1.00018 12.5V3.5C1.00071 2.83712 1.26427 2.20154 1.733 1.73282C2.20172 1.26409 2.8373 1.00053 3.50018 1H12.5002C13.1631 1.00053 13.7986 1.26409 14.2674 1.73282C14.7361 2.20154 14.9997 2.83712 15.0002 3.5V8H14.0002V3.5C13.9997 3.10234 13.8414 2.72111 13.5603 2.43992C13.2791 2.15873 12.8978 2.00053 12.5002 2H3.50018C3.10252 2.00053 2.72129 2.15873 2.4401 2.43992C2.15891 2.72111 2.00071 3.10234 2.00018 3.5V12.5C2.00071 12.8977 2.15891 13.2789 2.4401 13.5601C2.72129 13.8413 3.10252 13.9995 3.50018 14H8.00018V15ZM7.96218 10.189C6.85081 11.0519 5.56619 11.6645 4.19618 11.985L3.95418 11.015C5.14242 10.737 6.26 10.2153 7.23618 9.483C6.05261 8.23555 5.23961 6.68329 4.88818 5H4.00018V4H7.27918L6.73518 3.456L7.44218 2.749L8.69218 4H12.0002V5H11.0862C10.8378 6.11872 10.3958 7.18544 9.78018 8.152C8.9451 8.58595 8.29772 9.31052 7.96018 10.189H7.96218ZM7.99418 8.806C9.01206 7.74613 9.72512 6.43125 10.0582 5H5.92218C6.25813 6.43187 6.97392 7.74667 7.99418 8.806ZM23.0002 20.447V11.553C23.0039 11.2198 22.9416 10.8892 22.8169 10.5802C22.6922 10.2712 22.5076 9.98994 22.2738 9.75262C22.0399 9.5153 21.7613 9.32661 21.4542 9.19744C21.1471 9.06827 20.8174 9.00117 20.4842 9H11.5532C10.8763 9.00079 10.2274 9.27003 9.74881 9.74863C9.2702 10.2272 9.00097 10.8761 9.00018 11.553V20.447C9.00097 21.1239 9.2702 21.7728 9.74881 22.2514C10.2274 22.73 10.8763 22.9992 11.5532 23H20.4472C21.124 22.9992 21.7729 22.73 22.2515 22.2514C22.7302 21.7728 22.9994 21.1239 23.0002 20.447ZM20.4842 10C20.8862 10.0003 21.2716 10.1601 21.5559 10.4443C21.8401 10.7286 21.9999 11.114 22.0002 11.516V20.484C21.9999 20.886 21.8401 21.2714 21.5559 21.5557C21.2716 21.8399 20.8862 21.9997 20.4842 22H11.5162C11.1142 21.9997 10.7287 21.8399 10.4445 21.5557C10.1603 21.2714 10.0004 20.886 10.0002 20.484V11.516C10.0004 11.114 10.1603 10.7286 10.4445 10.4443C10.7287 10.1601 11.1142 10.0003 11.5162 10H20.4842ZM18.3982 18H13.6022L12.4432 20.23L11.5572 19.77L16.0002 11.215L20.4432 19.77L19.5572 20.23L18.3982 18ZM17.8782 17L16.0002 13.385L14.1222 17H17.8782ZM6.00018 22.01C5.46999 22.0092 4.96174 21.7982 4.58684 21.4233C4.21194 21.0484 4.00097 20.5402 4.00018 20.01V17.707L5.64618 19.353L6.35318 18.646L3.50618 15.8L0.65918 18.646L1.36618 19.353L3.00018 17.72V20.012C3.00097 20.8074 3.3173 21.57 3.87974 22.1324C4.44217 22.6949 5.20477 23.0112 6.00018 23.012H8.05818V22.012L6.00018 22.01ZM22.6462 4.647L21.0002 6.293V4C20.9994 3.20459 20.6831 2.44199 20.1206 1.87956C19.5582 1.31712 18.7956 1.00079 18.0002 1H16.0002V2H18.0002C18.5304 2.00079 19.0386 2.21176 19.4135 2.58666C19.7884 2.96156 19.9994 3.46981 20.0002 4V6.281L18.3662 4.646L17.6592 5.353L20.5062 8.201L23.3542 5.353L22.6462 4.647Z"
                clip-rule="evenodd" />
            </svg>
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
