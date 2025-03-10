import "./OlchadaDataOne.css";
import { OLCHADATAONE, OLCHADATATWO } from "../../Mock/OIchaDataOne";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";

const OlchadaDataOne = () => {
  return (
    <div className="container">
      <div className="olcha-data-one">
        <div className="olcha-data-one-div">
          <Link>
            <img
              src="https://olcha.uz/image/original/homePage/nUGQLN7Avr6JVOLtipm172yTPWDfKrPbsCpBGvb5YQaXiD8Qb5NHpckPU7yp."
              alt="URL img"
            />
          </Link>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="olcha-data-one-div-one">
          <div className="olcha-data-one-card-div">
            {OLCHADATAONE.map((item, index) => {
              return (
                <div className="olcha-data-one-card" key={index}>
                  <img src={item.oneimg} alt={item.oneheading} />
                  <section>
                    <h2>{item.oneheading}</h2>
                    <del>{item.onedelmoney}</del>
                    <p>{item.onemoney}</p>
                    <p>{item.onemonthmoney}</p>
                  </section>
                </div>
              );
            })}
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="olcha-data-one-card-div-one">
            {OLCHADATATWO.map((item, index) => {
              return (
                <div className="olcha-data-one-card-one" key={index}>
                  <div className="olcha-data-one-icons-div">
                    <button>
                      <BiHeart className="olcha-data-one-icon" />
                    </button>
                    <button>
                      <FiBarChart2 className="olcha-data-one-icon" />
                    </button>
                  </div>
                  <img src={item.twoimg} alt={item.twoheading} />
                  <section className="olcha-data-text">
                    <h2>{item.twoheading}</h2>
                    <del>{item.twodelmoney}</del>
                    <p>{item.twomoney}</p>
                    <p>{item.twomonthmoney}</p>
                  </section>
                  <div className="olcha-data-one-card-buttons">
                    <button className="olcha-data-one-cart-btn">
                      <PiShoppingCartSimple />
                    </button>
                    <button className="olcha-data-one-buy-btn">
                      Muddatli to`lov
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlchadaDataOne;
