import search_icon from "../../public/images/search_icon.svg"

/**
 * Header Searchbar UI Component
 * 
 * Provide the searchbar
 * @author R. Walter Dongmepi W.
 * @author Jonas Schwind
 */
function Searchbar ({ categories }) {
  
  return (
    <>
      <details className="dropdown">
        <summary className="btn bg-inherit m-1 font-semibold text-[23px] border-none">Kategorien</summary>
        <ul className="menu dropdown-content bg-base-100/60 backdrop-blur-3xl rounded-box z-[1] w-52 p-2 shadow">
          {categories.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </details>
      <label class="input input-bordered flex items-center bg-base-200  gap-2 dark:border-base-content dark:border-2 rounded-full border-base-content border-2">
        <input className="w-full h-12 rounded-full pl-6 pr-10 focus:none"
          type="search" name="search-fruits" id="" placeholder="Search" />
        <button >
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-base dark:fill-white opacity-70"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </label>
    </> 
  );
}

export default Searchbar;