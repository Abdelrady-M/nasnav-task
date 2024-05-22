import ProductDetail from "../ProductDetail/ProductDetail";
import ProductPreview from "../ProductPreview/ProductPreview";
import mainImage from "../../images/main.png";
import {previewImages} from '../../services/data'
import "./Product.scss";
const Product = () => {
  return (
    <section className="product">
      <section className="container">
        <ProductPreview mainImage={mainImage} previewImages={previewImages} />
        <ProductDetail />
      </section>
    </section>
  );
};

export default Product;
