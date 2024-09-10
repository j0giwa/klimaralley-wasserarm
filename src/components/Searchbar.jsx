/**
 * Header Searchbar UI Component
 *
 * Provide the searchbar
 * @author R. Walter Dongmepi W.
 * @author Jonas Schwind
 */
function Searchbar ({ categories }) {

  return (
    <div className="items-center">
      <details className="dropdown w-full">
        <summary className="bg-inherit font-semibold text-lg border-none flex justify-between items-center">
          <p>Kategorien</p>
          <svg className="fill-base-content w-6 h-6 cursor-pointer" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8289 14.3152C11.9208 14.3987 12.036 14.4398 12.151 14.4398C12.1692 14.4398 12.1872 14.4362 12.2057 14.4342C12.2124 14.4345 12.2194 14.4362 12.2261 14.4362C12.3569 14.4362 12.4872 14.3829 12.5818 14.2785L16.2372 10.2455C16.4153 10.0492 16.4004 9.7456 16.2039 9.56776C16.0075 9.38944 15.7039 9.4048 15.5261 9.60112L12.1572 13.3175L8.44033 9.94864C8.24377 9.77008 7.94042 9.78544 7.76258 9.982C7.5845 10.1783 7.59938 10.4819 7.79594 10.6598L11.8289 14.3152Z"/>
            <path d="M11.9999 19.9712C16.4277 19.9712 20.0298 16.3691 20.0298 11.9415C20.0298 7.51378 16.4277 3.91162 11.9999 3.91162C7.57238 3.91162 3.97021 7.51378 3.97021 11.9415C3.97021 16.3691 7.57238 19.9712 11.9999 19.9712ZM11.9999 4.87162C15.8982 4.87162 19.0698 8.04322 19.0698 11.9415C19.0698 15.8396 15.8982 19.0112 11.9999 19.0112C8.10182 19.0112 4.93021 15.8396 4.93021 11.9415C4.93021 8.04322 8.10182 4.87162 11.9999 4.87162Z"/>
          </svg>
        </summary>
        <ul className="menu dropdown-content bg-base-200 backdrop-blur-3xl z-[1] w-52 p-2 shadow">
          {categories.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </details>
      <label class="input w-full input-bordered flex items-center bg-base-200 gap-2 rounded-full border-base-300 border-2">
        <input className="w-full h-12 rounded-full pr focus:none"
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
    </div>
  );
}

export default Searchbar;
