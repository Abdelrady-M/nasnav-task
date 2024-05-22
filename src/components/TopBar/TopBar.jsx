import "./TopBar.scss";
import burgerIcon from "../../images/Group 770.svg";
import logo from "../../images/Group 769.svg";
import location from "../../images/Group 753.svg";
import phone from "../../images/Group 756.svg";
import cart from "../../images/Group 758.svg";
import arrowOne from "../../images/Path 347.svg";
import arrowTwo from "../../images/Path 346.svg";
const Nav = () => {
  return (
    <section className="T-Bar">
      <section className="container">
      <div className="logo">
          <div className="icon-wrapper">
            <img src={burgerIcon} alt="burgerIcon" />
          </div>
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
      </div>
        <p>
          <span className="arrowOne">
            <img src={arrowOne} alt="" />
          </span>
          Valentine’s Day Offers! Buy Two Get One Free
          <span className="special">Shop Now</span>
          <span className="arrowTwo">
            <img src={arrowTwo} alt="" />
          </span>
        </p>
        <div className="links">
          <div>
            <div className="image-wrapper">
              <img src={phone} alt="" />
            </div>

            <a href="./">Contact Us</a>
          </div>
          <div>
            <div className="image-wrapper">
              <img src={cart} alt="" />
            </div>

            <a href="./">Track Order</a>
          </div>
          <div>
            <div className="image-wrapper">
              <img src={location} alt="" />
            </div>

            <a href="./">Find A Store</a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Nav;
