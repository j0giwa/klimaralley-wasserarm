import { useState } from "react";
import { useNavigate } from "react-router-dom";



/**
 * Header Searchbar UI Component
 *
 * Provide the searchbar
 * @author R. Walter Dongmepi W.
 * @author Jonas Schwind
 */
function Searchbar ({ categories }) {

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCatogory] = useState('');

  const handleChange = (event) =>{
    const selectedType = event.target.value;
    setSelectedCatogory(selectedType)
    if (selectedType) {
      navigate(`/play/wasserarm/shop/${selectedType}`)
    } else {
      navigate(`/play/wasserarm/shop/`)
    }
  };

  return (
    <div className="items-center">
      <select 
        className="select active:border-none  focus:outline-none active:outline-none w-full font-semibold focus:border-none"
        value={selectedCategory}
        onChange={handleChange}
        >
        <option disabled>Kategorien</option>
        <option value="all">All</option>
        {categories.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
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
