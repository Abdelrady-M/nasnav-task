import ProductDetail from "../ProductDetail/ProductDetail";
import ProductPreview from "../../ProductPreview/ProductPreview";
import "./Product.scss";
const Product = () => {
  return (
    <section className="product">
      <section className="container">
        <ProductPreview />
        <ProductDetail />
      </section>
    </section>
  );
};

export default Product;
