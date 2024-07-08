import { useState, useEffect } from "react"
import { getCookie, setCookie } from "../lib/cookieUtils";

/**
 * Theme Controller Component
 * 
 * Cookie based toogling of light/dark mode.
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 1.0.0
 */
function ThemeController() {

	/** @type {boolean} */
  const [isdark, setIsdark] = useState(
    JSON.parse(getCookie('isdark') || 'false')
  );

  useEffect(() => {
    setCookie('isdark', JSON.stringify(isdark), { path: '/' });

    if (isdark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'forest');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isdark]);
  
  return (
    <label className="grid cursor-pointer place-items-center">
      <input type="checkbox" className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        value="forest" checked={isdark} onChange={() => setIsdark(!isdark)} />
      <svg className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  );
}

export default ThemeController;
