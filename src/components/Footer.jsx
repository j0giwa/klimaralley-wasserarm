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
      <div className="flex justify-between items-center fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-[374px] h-[60px] mx-[30px] my-[4px] bg-base-100/85 backdrop-blur-sm rounded-full border-base-100 ">
        <div>1</div>
        <div>2</div>
        <button className="btn btn-ghost" onClick={togglePopup}>🧺</button>
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
