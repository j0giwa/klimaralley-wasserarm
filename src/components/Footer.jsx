import { useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

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
      <div className="flex justify-between items-center fixed bottom-3 left-0 right-0 mx-auto w-[374px] h-[60px] bg-base-100/85 backdrop-blur-sm rounded-full">
        <button className="btn btn-ghost">
          <img src="images/home.png" alt="Home"></img>
        </button>
        <button className="btn btn-ghost">
          <img src="images/book.png" alt="Home"></img>
        </button>
        <button className="btn btn-ghost" onClick={togglePopup}>
          <img src="images/shoppingCart.png" alt="shopping Cart"></img>
        </button>
        {isOpen && (
          <div className="popup">
            <ShoppingCart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
