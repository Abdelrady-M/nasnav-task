import { useState, useEffect } from "react";
import "./CartModal.scss";
import closeIcon from "../../images/close.svg"; 
import toast , {Toaster} from "react-hot-toast"

// eslint-disable-next-line react/prop-types
const CartModal = ({ toggleCartModal }) => {
  const [cartItems, setCartItems] = useState([]);

  // GET CARTITEMS FROM LOCAL STORAGE
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && Array.isArray(savedCart)) {
      setCartItems(savedCart);
    }
  }, []);

  // FORMAT PRICE AS CURRENCY LE
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount) + ' LE';
  };

  // CALCULATE THE TOTAL PRICE
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // HANDLE REMOVE ITEMS FROM CART
  const handelRemoveCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    toast("Product has been deleted successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#c2344d",
        color: "white",
      },
    });
  }

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
                <div className="cart-item" key={item}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item__details">
                    <h5>{item.title}</h5>
                    <div className="qty">Quantity: {item.quantity}</div>
                    <div>
                      <span className="price">{formatCurrency(item.price * item.quantity)}</span>
                      <button className="btnRemove" onClick={handelRemoveCart}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="allprice">Total: {formatCurrency(calculateTotal())}</div>
          <div className="btns">
            <button className="review">Review Cart</button>
            <button className="checkout">Complete Checkout</button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CartModal;
