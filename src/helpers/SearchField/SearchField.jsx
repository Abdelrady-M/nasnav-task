import searchIcon from "../../images/Path 774.svg";
import "./SearchField.scss";
const SearchField = () => {
  return (
    <div className="field">
      <input type="text" placeholder="Search" />
      <div>
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchField;
