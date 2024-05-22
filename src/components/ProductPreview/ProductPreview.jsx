import "./ProductPreview.scss";
import arrowOne from "../../images/Path 347.svg";
import arrowTwo from "../../images/Path 346.svg";
import PropTypes from 'prop-types';

const ProductPreview = ({ mainImage, previewImages }) => {
  return (
    <section className="preview">
      <div className="main-image">
        <img src={mainImage} alt="main_image" />
      </div>
      <div className="images">
        <span className="arrowOne">
          <img src={arrowOne} alt="Previous" />
        </span>
        {previewImages.map((img, index) => (
          <div key={index} className="wrapper">
            <img src={img} alt={`Preview ${index + 1}`} />
          </div>
        ))}
        <span className="arrowTwo">
          <img src={arrowTwo} alt="Next" />
        </span>
      </div>
    </section>
  );
};

ProductPreview.propTypes = {
  mainImage: PropTypes.string.isRequired,
  previewImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductPreview;