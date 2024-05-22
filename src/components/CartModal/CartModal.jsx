import { useState, useEffect } from "react";
import "./CartModal.scss";
import closeIcon from "../../images/close.svg"; // Import the close icon correctly

// eslint-disable-next-line react/prop-types
const CartModal = ({ toggleCartModal }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && Array.isArray(savedCart)) {
      setCartItems(savedCart);
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-modal">
        <div className="cart-header">
          <button className="close" onClick={toggleCartModal}>
            <img src={closeIcon} alt="Close" />
          </button>
          <h3>My Cart</h3>
        </div>
        <div className="cart-body">
          <h4>Cart Summary</h4>
          {cartItems.length === 0 ? (
            <p className="emptycart">Cart is Empty</p>
          ) : (
            <div className="cart-elements">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item__details">
                    <h5>{item.title}</h5>
                    <div className="qty">Qty: {item.quantity}</div>
                    <div>
                      <span className="price">{item.price * item.quantity} LE</span>
                      <button className="btnRemove">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="allprice">Total: {calculateTotal()} LE</div>
          <div className="btns">
            <button className="review">Review Cart</button>
            <button className="checkout">Complete Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
