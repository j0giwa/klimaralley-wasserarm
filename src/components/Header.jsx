import { useEffect, useState, useRef } from "react";
import SearchBar from "./Searchbar";
import Total from "./Total";
import ThemeController from "./ThemeController";
import coinIcon from "/icons/Coin.svg";
import dummyPB from "/icons/dummyPB.webp";
import { useShopContext } from "../lib/context";

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
function Header({ searchBar, categorys, total }) {
  //menu icon
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let menuRef = useRef();

  // close the dropdown when it is clicked outside
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsProfileOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Language icon
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // TODO: Languange change
  const handleLanguageChange = (language) => {
    setIsLanguageOpen(false);
  };

  // users coins
  const { coins } = useShopContext();

  // Profile icon
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = (option) => {
    // Handle navigation or actions here
    if (option === "Problem melden") {
      window.location.href =
        "mailto:support@example.com?subject=Problem melden&body=Please describe the issue you are facing.";
    } else if (option === "Home") {
      window.location.href = "/play/wasserarm/shop"; // Navigate to the "Home" page
      // TODO: Logout Method
    }
    setIsProfileOpen(false);
  };

  return (
    <div className="z-20 fixed top-0 left-0 right-0 px-3 w-full py-[24px] bg-base-100 dark:backdrop-blur-3xl shadow-xl flex flex-col gap-4">
      <div className="flex items-center justify-between">
        {/* More Menu */}
        <div>
          <button
            className="btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              className="fill-base-content"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 8.125C13.8975 8.125 14.625 7.39746 14.625 6.5C14.625 5.60254 13.8975 4.875 13 4.875C12.1025 4.875 11.375 5.60254 11.375 6.5C11.375 7.39746 12.1025 8.125 13 8.125Z" />
              <path d="M13 14.625C13.8975 14.625 14.625 13.8975 14.625 13C14.625 12.1025 13.8975 11.375 13 11.375C12.1025 11.375 11.375 12.1025 11.375 13C11.375 13.8975 12.1025 14.625 13 14.625Z" />
              <path d="M13 21.125C13.8975 21.125 14.625 20.3975 14.625 19.5C14.625 18.6025 13.8975 17.875 13 17.875C12.1025 17.875 11.375 18.6025 11.375 19.5C11.375 20.3975 12.1025 21.125 13 21.125Z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="z-[1000] absolute shadow-xl bg-base-200 text-base-content w-32 h-24 py-5 px-3 rounded-lg gap-2">
              <ul className="flex flex-col gap-4" ref={menuRef}>
                <li className="flex gap-3 items-center">
                  <p>Theme</p>
                  <ThemeController />
                </li>
                <li className="flex items-center gap-4">
                  <p>Sprachen</p>
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-base-content cursor-pointer"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.00018 15H3.50018C2.8373 14.9995 2.20172 14.7359 1.733 14.2672C1.26427 13.7985 1.00071 13.1629 1.00018 12.5V3.5C1.00071 2.83712 1.26427 2.20154 1.733 1.73282C2.20172 1.26409 2.8373 1.00053 3.50018 1H12.5002C13.1631 1.00053 13.7986 1.26409 14.2674 1.73282C14.7361 2.20154 14.9997 2.83712 15.0002 3.5V8H14.0002V3.5C13.9997 3.10234 13.8414 2.72111 13.5603 2.43992C13.2791 2.15873 12.8978 2.00053 12.5002 2H3.50018C3.10252 2.00053 2.72129 2.15873 2.4401 2.43992C2.15891 2.72111 2.00071 3.10234 2.00018 3.5V12.5C2.00071 12.8977 2.15891 13.2789 2.4401 13.5601C2.72129 13.8413 3.10252 13.9995 3.50018 14H8.00018V15ZM7.96218 10.189C6.85081 11.0519 5.56619 11.6645 4.19618 11.985L3.95418 11.015C5.14242 10.737 6.26 10.2153 7.23618 9.483C6.05261 8.23555 5.23961 6.68329 4.88818 5H4.00018V4H7.27918L6.73518 3.456L7.44218 2.749L8.69218 4H12.0002V5H11.0862C10.8378 6.11872 10.3958 7.18544 9.78018 8.152C8.9451 8.58595 8.29772 9.31052 7.96018 10.189H7.96218ZM7.99418 8.806C9.01206 7.74613 9.72512 6.43125 10.0582 5H5.92218C6.25813 6.43187 6.97392 7.74667 7.99418 8.806ZM23.0002 20.447V11.553C23.0039 11.2198 22.9416 10.8892 22.8169 10.5802C22.6922 10.2712 22.5076 9.98994 22.2738 9.75262C22.0399 9.5153 21.7613 9.32661 21.4542 9.19744C21.1471 9.06827 20.8174 9.00117 20.4842 9H11.5532C10.8763 9.00079 10.2274 9.27003 9.74881 9.74863C9.2702 10.2272 9.00097 10.8761 9.00018 11.553V20.447C9.00097 21.1239 9.2702 21.7728 9.74881 22.2514C10.2274 22.73 10.8763 22.9992 11.5532 23H20.4472C21.124 22.9992 21.7729 22.73 22.2515 22.2514C22.7302 21.7728 22.9994 21.1239 23.0002 20.447ZM20.4842 10C20.8862 10.0003 21.2716 10.1601 21.5559 10.4443C21.8401 10.7286 21.9999 11.114 22.0002 11.516V20.484C21.9999 20.886 21.8401 21.2714 21.5559 21.5557C21.2716 21.8399 20.8862 21.9997 20.4842 22H11.5162C11.1142 21.9997 10.7287 21.8399 10.4445 21.5557C10.1603 21.2714 10.0004 20.886 10.0002 20.484V11.516C10.0004 11.114 10.1603 10.7286 10.4445 10.4443C10.7287 10.1601 11.1142 10.0003 11.5162 10H20.4842ZM18.3982 18H13.6022L12.4432 20.23L11.5572 19.77L16.0002 11.215L20.4432 19.77L19.5572 20.23L18.3982 18ZM17.8782 17L16.0002 13.385L14.1222 17H17.8782ZM6.00018 22.01C5.46999 22.0092 4.96174 21.7982 4.58684 21.4233C4.21194 21.0484 4.00097 20.5402 4.00018 20.01V17.707L5.64618 19.353L6.35318 18.646L3.50618 15.8L0.65918 18.646L1.36618 19.353L3.00018 17.72V20.012C3.00097 20.8074 3.3173 21.57 3.87974 22.1324C4.44217 22.6949 5.20477 23.0112 6.00018 23.012H8.05818V22.012L6.00018 22.01ZM22.6462 4.647L21.0002 6.293V4C20.9994 3.20459 20.6831 2.44199 20.1206 1.87956C19.5582 1.31712 18.7956 1.00079 18.0002 1H16.0002V2H18.0002C18.5304 2.00079 19.0386 2.21176 19.4135 2.58666C19.7884 2.96156 19.9994 3.46981 20.0002 4V6.281L18.3662 4.646L17.6592 5.353L20.5062 8.201L23.3542 5.353L22.6462 4.647Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {isLanguageOpen && (
                      <div className="z-[1000] absolute left-0 mt-2 w-24 border rounded-lg bg-base-200">
                        <ul className="text-sm">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleLanguageChange("Englisch")}
                          >
                            Englisch
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleLanguageChange("Deutsch")}
                          >
                            Deutsch
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Money */}
        <div className="flex gap-2 w-fit p-2 bg-base-200 border-2 border-base-300 rounded-full">
          {/*make dynamic coin counter*/}
          <p>{coins}</p>
          <img className="h-[23px]" src={coinIcon} alt="Coins"></img>
        </div>

        {/* Profile */}
        <div className="relative">
          <img
            src={dummyPB}
            alt="Profile picture"
            className="w-[40px] h-[40px] p-[1px] border border-base-300 rounded-full cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          />
          {isProfileOpen && (
            <div className="z-[1000] absolute right-0 mt-2 w-36 rounded-lg bg-base-200 shadow-lg">
              <ul className="text-sm cursor-pointer" ref={menuRef}>
                <li
                  className="px-4 py-2 flex items-center justify-between"
                  onClick={() => handleProfileClick("Home")}
                >
                  Home
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    className="stroke-base-content"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_923_9958)">
                      <path
                        d="M14.6668 8.6361V9.65016C14.6668 12.2507 14.6668 13.551 13.8858 14.3589C13.1048 15.1668 11.8476 15.1668 9.3335 15.1668H6.66683C4.15267 15.1668 2.8956 15.1668 2.11454 14.3589C1.3335 13.551 1.3335 12.2507 1.3335 9.65016V8.6361C1.3335 7.11049 1.3335 6.34768 1.67963 5.71532C2.02576 5.08297 2.65813 4.6905 3.92285 3.90558L5.25618 3.07808C6.59309 2.24836 7.26156 1.8335 8.00016 1.8335C8.73876 1.8335 9.40723 2.24836 10.7442 3.07808L12.0775 3.90558C13.3422 4.6905 13.9746 5.08297 14.3207 5.71532"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10 12.5H6"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_923_9958">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li
                  className="px-4 py-2"
                  onClick={() => handleProfileClick("Problem melden")}
                >
                  Problem melden
                </li>
                <li
                  className="px-4 py-2 bg-error/45 flex items-center justify-between"
                  onClick={() => handleProfileClick("Logout")}
                >
                  Logout
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    className="stroke-base-content"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6665 11.8332L13.9998 8.49984L10.6665 5.1665"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 8.5H6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 14.5H3.33333C2.97971 14.5 2.64057 14.3595 2.39052 14.1095C2.14048 13.8594 2 13.5203 2 13.1667V3.83333C2 3.47971 2.14048 3.14057 2.39052 2.89052C2.64057 2.64048 2.97971 2.5 3.33333 2.5H6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/*Searchbar*/}
      {searchBar && (
        <div className="flex-col">
          <SearchBar categories={categorys} />
        </div>
      )}
      {/* Total water and coin */}
      {total && (
        <div>
          <Total />
        </div>
      )}
    </div>
  );
}

export default Header;
