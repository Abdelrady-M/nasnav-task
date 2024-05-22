import SearchField from "../../helpers/SearchField/SearchField";
import "./FunctionBar.scss";
import logo from "../../images/Group 745.svg";
import cart2 from "../../images/Path 772.svg";
import wishlist from "../../images/Path 771.svg";
import login from "../../images/Path 773.svg";
// eslint-disable-next-line react/prop-types
const FunctionBar = ({ Items_No }) => {
  return (
    <section className="F-Bar">
      <section className="container">
        <SearchField />

        <div className="logo-wrapper">
          <img src={logo} alt="" />
        </div>
        <div className="functions">
          <div>
            <div className="image-wrapper">
              <span>{Items_No}</span>
              <img src={cart2} alt="" />
            </div>
            <div>Cart</div>
          </div>
          <div>
            <div className="image-wrapper">
              <img src={wishlist} alt="" />
            </div>
            <div>Wishlist</div>
          </div>
          <div>
            <div className="image-wrapper">
              <img src={login} alt="" />
            </div>
            <div>Login</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FunctionBar;
