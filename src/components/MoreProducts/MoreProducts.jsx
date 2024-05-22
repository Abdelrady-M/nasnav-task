import "./MoreProducts.scss";
import fillStar from "../../images/Path 368.svg";
import star from "../../images/Path 369.svg";
import { products_data } from "../../services/data";

const MoreProducts = () => {
const products = products_data
  return (
    <section className="more">
      <section className="container">
        <div className="header">
          <h1>Similar Products</h1>
          <h3>You may like these products also</h3>
        </div>

        <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product.id} id={product.id}>
              <div className="img-wrapper">
                <img src={product.img} alt={product.description} />
              </div>
              <p>{product.description}</p>
              <div className="price">
                <h1>
                  {product.price} <span>LE</span>
                </h1>
                <img src={`../../images/${product.brand}`} alt="" />
                {product.discount ? (
                  <div className="dis">
                    <span className="old-price">
                      {product.before_discount} LE
                    </span>
                    <span className="discount"> {product.discount}</span>
                  </div>
                ) : (
                  <div className="gap"> </div>
                )}
              </div>
              <div className="rating">
                <img src={fillStar} alt="" />
                <img src={fillStar} alt="" />
                <img src={fillStar} alt="" />
                <img src={fillStar} alt="" />
                <img src={star} alt="" />
                <span>4.2 of 5</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default MoreProducts;
