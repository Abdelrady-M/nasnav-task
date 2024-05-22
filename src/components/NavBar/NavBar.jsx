import "./NavBar.scss";
import {categories} from "../../services/data"
import {paths} from "../../services/data"


const NavBar = () => {

  return (
    <>
      <nav>
        <section className="container">
          <div className="category">
            {categories.map((category) => (
              <a id={category} key={category.id} href="./">
                {category.name}
              </a>
            ))}
          </div>
        </section>
      </nav>
      <section className="nav2">
        <section className="container">
          <div className="path">
            {paths.map((path, idx) => (
              <div key={path.id}>
                <a id={path.id} href="./">
                  {path.name}
                </a>
                {!(idx === paths.length - 1) && <span> /</span>}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default NavBar;
