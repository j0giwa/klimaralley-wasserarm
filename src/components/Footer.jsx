import { useState, React } from "react";
import ShoppingCart from "../components/ShoppingCart";
import ingredientscart from "../../public/icons/Ingredients-icon.png"
import shopIcon from "../../public/icons/Shop-icon.png"
import storyIcon from "../../public/icons/Storytelling-icon.png"
import { Link } from 'react-router-dom'
import Cart from "../routes/Cart";

/**
 * The Footer of the website and the functions
 *
 * @author Marlon Schrader
 * @author Alexander Golüke
 * @author R. Walter Dongmepi W.
 * @version 0.5.0
 */
function Footer({ cartItems, onAdd, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-7 fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-[374px] h-[60px] mx-auto my-[4px] bg-base-200 backdrop-blur-sm rounded-full border-base-300 border-2">
        <div className="btn btn-ghost bg-transparent border-none px-1 mx-0 rounded-xl">
          <Link to="/">
            <img src={shopIcon} alt="image of shop icon" />
          </Link>
        </div>
        <div className="btn btn-ghost bg-transparent border-none px-1 rounded-xl">
          <Link to="/story">
            <img src={storyIcon} alt="image of story icon" />
          </Link>
        </div>
        <button className="btn bg-transparent border-none px-1 btn-ghost rounded-xl">
          <Link to={"./Cart"}>
            <img src={ingredientscart} alt="icon of shopping cart" />
          </Link>
        </button>
        {isOpen && (
          <div className="popup">
            <ShoppingCart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove} />
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
