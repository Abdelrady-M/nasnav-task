import { useState, useEffect } from "react";
import SearchField from "../../helpers/SearchField/SearchField";
import "./FunctionBar.scss";
import logo from "../../images/Group 745.svg";
import cart2 from "../../images/Path 772.svg";
import wishlist from "../../images/Path 771.svg";
import login from "../../images/Path 773.svg";
import CartModal from "../CartModal/CartModal";

const FunctionBar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const updateCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && Array.isArray(savedCart)) {
      setCartItems(savedCart);
      const totalQuantity = savedCart.reduce((acc, item) => acc + item.quantity, 0);
      setQuantity(totalQuantity);
    }
  };

  useEffect(() => {
    updateCart();
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };


  return (
    <section className="F-Bar">
      <section className="container">
        <SearchField />

        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
        </div>
        <div className="functions">
          <div>
            <button onClick={toggleCartModal} className="btn">
              <div className="image-wrapper">
                <span>{quantity}</span>
                <img src={cart2} alt="Cart" />
              </div>
              <div>Cart</div>
            </button>
          </div>
          <div>
            <div className="image-wrapper">
              <img src={wishlist} alt="Wishlist" />
            </div>
            <div>Wishlist</div>
          </div>
          <div>
            <div className="image-wrapper">
              <img src={login} alt="Login" />
            </div>
            <div>Login</div>
          </div>
        </div>
      </section>
      {isCartModalOpen && <CartModal toggleCartModal={toggleCartModal} cartItems={cartItems} />}
    </section>
  );
};

export default FunctionBar;
