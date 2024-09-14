import { React } from "react";
import ingredientscart from "/icons/Ingredients.svg";
import shopIcon from "/icons/Shop.svg";
import storyIcon from "/icons/Storytelling.svg";
import { Link } from "react-router-dom";


/**
 * The Footer of the website and the functions
 *
 * @author Marlon Schrader
 * @author Alexander Golüke
 * @author R. Walter Dongmepi W.
 * @version 0.5.0
 */
function Footer() {

  return (
    <>
      <div className="flex justify-between items-center px-7 shadow-xl fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-[374px] h-[60px] mx-auto my-[4px] bg-base-100 backdrop-blur-3xl rounded-full border-base-300 border-2">
        <Link
          className="btn bg-transparent border-none px-1 btn-ghost rounded-xl"
          to="/play/wasserarm/shop/:category?"
        >
          <img src={shopIcon} alt="image of shop icon" />
        </Link>
        <Link
          className="btn btn-ghost bg-transparent border-none px-1 rounded-xl"
          to="/play/wasserarm/"
        >
          <img src={storyIcon} alt="image of story icon" />
        </Link>
        <Link
          className="btn bg-transparent border-none px-1 btn-ghost rounded-xl"
          to="/play/wasserarm/cart"
        >
          <img src={ingredientscart} alt="icon of shopping cart" />
        </Link>
      </div>
    </>
  );
}

export default Footer;
