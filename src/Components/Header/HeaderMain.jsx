import "./HeaderMain.css";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <div className="headermain">
      <div className="container">
        <section className="headermain-nav-menu">
          <section className="headermain-left-section">
            <section className="headermain-foydali">
              <Link to="/MuddatliTolov" className="headermain-link">
                0% Muddatli to`lov
              </Link>
              <Link to="/Chegirmalar" className="headermain-linkone">
                Chegirmalar
              </Link>
              <Link to="YutuqliOyinlar" className="headermain-linktwo">
                Yutuqli o`yinlar
              </Link>
            </section>

            <section className="headermain-sayt-map">
              <Link to="/SaytXaritasi">Sayt xaritasi</Link>
            </section>
          </section>

          <section className="headermain-right-section">
            <section className="headermain-number-shop">
              <Link to="tel:+998712022021" className="headermain-link-number">
                +998 (71) 202 2021
              </Link>
              <Link to="OlchadaSoting" className="headermain-link-shop">
                olcha da soting
              </Link>
            </section>

            <section className="headermain-langs-section">
              <Link to="/Uzb">Ўзб</Link>
              <Link to="/Uz">O`z</Link>
              <Link to="/Rus">Рус</Link>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default HeaderMain;
