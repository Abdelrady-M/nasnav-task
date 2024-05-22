/* eslint-disable no-undef */
import "./Footer.scss";
import f_logo from "../../images/Group 1436.svg";
import plane from "../../images/Group 1431.svg";
import nasIcon from "../../images/Group 1439.svg";
import {icons} from '../../services/data'
const links = [
  "About Us",
  "Contact Us",
  "Track Order",
  "Terms & Conditions",
  "Privacy Policy",
  "Sell With Us",
  "Shipping And Returns",
];

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <div className="footer-wrapper">
          <div className="footer-descrip">
            <div>
              <img src={f_logo} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
            </p>
            <p>
              m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Ut wisi enim ad minim veniam, quis
            </p>
          </div>
          <div className="other">
            <h1>Subscribe to our newsletter</h1>
            <div className="subscribe">
              <input type="text" placeholder="Enter Your Mail" />
              <button>
                Subscribe
                <span>
                  <img src={plane} alt="" />
                </span>
              </button>
            </div>
            <div className="sec">
              <div className="other-links">
                {links.map((link, index) => (
                  <a href="./" id={index} key={index}>
                    {link}
                  </a>
                ))}
              </div>
              <div className="social">
                {icons.map((icon) => (
                  <div key={icon} id={icon}>
                   <img src={icon}/>
                    <span>/YESHTERY</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="end">
          <p>&copy; 2021 yeshtery, all rights reserved.</p>
          <div>
          <img src={`../../images/Rectangle586.png`} alt="" />
          <img src={`../../images/Group1437.png`} alt="" />
          <img src={`../../images/Group1438.png`} alt="" />
          </div>
          <h2>
            Powered By
            <img src={nasIcon} alt="" />
          </h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
