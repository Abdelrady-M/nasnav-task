import { useState } from "react";
import "./ProductDetail.scss";
import logo from "../../images/Group346.svg";
import mainImage from "../../images/main.png";
import fillStar from "../../images/Path 368.svg";
import star from "../../images/Path 369.svg";
import plus from "../../images/Path 363.svg";
import minus from "../../images/Path 364.svg";
import color1 from "../../images/Group 354.png";
import color2 from "../../images/Group 356.png";
import toast , {Toaster} from "react-hot-toast"

const sizes = ["Small", "Medium", "Large", "X Large", "XX Large"];

const ProductDetail = () => {
  // STATE
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(color1);
  // Handel Add to cart 
  const handleAddToCart = (event) => {
    event.preventDefault();
    const productDetails = {
      title: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      price: 9999,
      image: mainImage,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
    };
    toast("Product has been Added to cart successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "green",
        color: "white",
      },
    });
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) =>
        item.title === productDetails.title &&
        item.size === productDetails.size &&
        item.color === productDetails.color
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += productDetails.quantity;
    } else {
      existingCart.push(productDetails);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    const eventCart = new Event("cartUpdated");
    window.dispatchEvent(eventCart);
  };
  // increment and decrement the quantity
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <section className="detail">
      <div className="logo-wrapper">
        <img src={logo} alt="Product logo" />
      </div>
      <form onSubmit={handleAddToCart}>
        <p>
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <h4>Men</h4>
        <div className="rating">
          <img src={fillStar} alt="Filled star" />
          <img src={fillStar} alt="Filled star" />
          <img src={fillStar} alt="Filled star" />
          <img src={fillStar} alt="Filled star" />
          <img src={star} alt="Star" />
          <span>4.9 of 5</span>
          <span>22 Rates</span>
        </div>
        <div className="price">
          <h1>
            9,999 <span>LE</span>
          </h1>
          <span className="old-price"> 9,999 LE</span>
          <span className="discount"> 30% Off</span>
        </div>
        <div className="size">
          <h1 className="title">Size</h1>
          <div>
            {sizes.map((size) => (
              <span
                key={size}
                id={size}
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? "selected" : ""}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="color">
          <h1 className="title">Color</h1>
          <div className="circle">
            <span onClick={() => setSelectedColor(color1)}>
              <img src={color1} alt="Color 1" />
            </span>
            <span onClick={() => setSelectedColor(color2)}>
              <img src={color2} alt="Color 2" />
            </span>
          </div>
        </div>
        <div className="quantity">
          <h1 className="title">Quantity</h1>
          <div>
            <button type="button" onClick={decreaseQuantity}>
              <img src={minus} alt="Decrease quantity" />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={increaseQuantity}>
              <img src={plus} alt="Increase quantity" />
            </button>
          </div>
        </div>
        <div className="purchase">
          <button type="submit">Add to cart</button>
          <button type="button">Pickup from store</button>
        </div>
      </form>
      <Toaster />
    </section>
  );
};

export default ProductDetail;
