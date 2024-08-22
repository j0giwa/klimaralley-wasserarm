import { useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import ingredientscart from "../../public/icons/Ingredients-icon.png"
import shopIcon from "../../public/icons/Shop-icon.png"
import storyIcon from "../../public/icons/Storytelling-icon.png"

/**
 * The Footer of the website and the functions
 *
 * @author Marlon Schrader
 * @author Alexander Golüke
 * @version 0.5.0
 */
function Footer({ cartItems, onAdd, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-7 py- fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-[374px] h-[60px] mx-[30px] my-[4px] bg-base-300 backdrop-blur-sm rounded-full border-base-content border-2 dark:border-base-content dark:border-2">
        <div>
          <img src={shopIcon} alt="image of shop icon" />
        </div>
        <div>
          <img src={storyIcon} alt="image of story icon" />
        </div>
        <button className="btn-ghost" onClick={togglePopup}>
          <img src={ingredientscart} alt="icon of shopping cart" />
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
