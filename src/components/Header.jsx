import { useState } from "react";
import SearchBar from "./Searchbar";
import ThemeController from "./ThemeController";
import coin from "/icons/Coin.svg";
import dummyPB from "/icons/dummyPB.webp";
import translation from "/icons/Translation.svg";

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
  // Language icon
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageClick = (language) => {
    // Handle language change or actions here
    setIsLanguageOpen(false);
  };

  // Profile icon
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleProfileClick = (option) => {
    // Handle navigation or actions here
    if (option === "Problem melden") {
      window.location.href =
        "mailto:support@example.com?subject=Problem melden&body=Please describe the issue you are facing.";
    }
    setIsProfileOpen(false);
  };

  return (
    <div className="z-20 fixed top-0 left-0 right-0  w-full px-[16px] py-[24px] bg-base-100 dark:bg-base-100/60 dark:backdrop-blur-3xl">
      <div className="flex items-center justify-between">
        {/* Language */}
        <div className="relative">
          <img
            src={translation}
            alt="Icon Übersetzung"
            className="w-[30px]"
            onClick={toggleLanguageDropdown}
          ></img>

          {isLanguageOpen && (
            <div className="z-[1000] absolute left-0 mt-2 w-48 border rounded bg-base-100">
              <ul className="text-sm">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageClick("Englisch")}
                >
                  Englisch
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageClick("Deutsch")}
                >
                  Deutsch
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Money */}
        <div className="flex justify-between w-[95px] p-[15px] bg-base-200 border-2 border-base-300 rounded-full">
          {/*make dynamic coin counter*/}
          <p>500</p>
          <img className="h-[23px]" src={coin} alt="Coins"></img>
        </div>

        {/* Profile */}
        <div className="relative">
          <img
            src={dummyPB}
            alt="Profile picture"
            className="w-[40px] h-[40px] p-[1px] border border-base-300 rounded-full cursor-pointer"
            onClick={toggleProfileDropdown}
          />
          {isProfileOpen && (
            <div className="z-[1000] absolute right-0 mt-2 w-48 border rounded bg-base-100">
              <ul className="text-sm cursor-pointer">
                <li className="px-3 py-2 ">
                  <ThemeController />
                </li>
                <li
                  className="px-4 py-2"
                  onClick={() => handleProfileClick("Home")}
                >
                  Home
                </li>
                <li
                  className="px-4 py-2  text-red-600"
                  onClick={() => handleProfileClick("Problem melden")}
                >
                  Problem melden
                </li>
                <li
                  className="px-4 py-2 bg-error"
                  onClick={() => handleProfileClick("Logout")}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/*Searchbar*/}
      {searchBar && (
        <div className="flex-col px-4 ">
          <SearchBar categories={categorys} />
        </div>
      )}
    </div>
  );
}

export default Header;
