import "./HeaderTop.css";
import "./HeaderTopMedia.css";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="container">
      <figure className="headertop-figure">
        <Link to="/OlchaQo'ldan">
          <img
            src="https://olcha.uz/uploads/advertising/images/top/7xlobVcBgEnWvETyrySM2DwRBppXsL9iqn0ps8Bc.jpg"
            alt="OLCHA QO'LDA IMG"
            width={"100%"}
          />
        </Link>
      </figure>
    </div>
  );
};

export default HeaderTop;
