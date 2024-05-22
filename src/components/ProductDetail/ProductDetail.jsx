import "./ProductDetail.scss";
import logo from "../../images/Group346.svg";
import fillStar from "../../images/Path 368.svg";
import star from "../../images/Path 369.svg";
import plus from "../../images/Path 363.svg";
import minus from "../../images/Path 364.svg";
import color1 from "../../images/Group 354.png";
import color2 from "../../images/Group 356.png";

const sizes = ["Small", "Medium", "Large", "X Large", "XX Large"];

const ProductDetail = () => {
  return (
    <section className="detail">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
      </div>
      <p>
        Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing
        elit.
      </p>
      <h4>Men</h4>
      <div className="rating">
        <img src={fillStar} alt="" />
        <img src={fillStar} alt="" />
        <img src={fillStar} alt="" />
        <img src={fillStar} alt="" />
        <img src={star} alt="" />
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
            <span key={size} id={size}>
              {size}
            </span>
          ))}
        </div>
      </div>
      <div className="color">
        <h1 className="title">Color</h1>
        <div>
          <span>
            <img src={color1} alt="" />
          </span>
          <span>
            <img src={color2} alt="" />
          </span>
        </div>
      </div>
      <div className="quantity">
        <h1 className="title">Quantity</h1>
        <div>
          <button>
            <img src={minus} alt="" />
          </button>
          <span>1</span>
          <button>
            <img src={plus} alt="" />
          </button>
        </div>
      </div>
      <div className="purchase">
        <button>add to cart</button>
        <button> pickup from store</button>
      </div>
    </section>
  );
};

export default ProductDetail;
