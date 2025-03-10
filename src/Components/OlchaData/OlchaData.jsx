import "./OlchaData.css";
import { OLCHADATA } from "../../Mock/OlchaData.js";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";

const OlchaData = () => {
  return (
    <div className="container">
      <div className="olcha-data">
        {OLCHADATA.map((item, index) => {
          return (
            <div className="olcha-data-card" key={index}>
              <div className="card-actions">
                <button className="wishlist-btn">
                  <FiHeart />
                </button>
                <button className="stats-btn">
                  <FiBarChart2 />
                </button>
              </div>
              <img src={item.img || "/placeholder.svg"} alt={item.heading} />
              <div className="olcha-data-card-heading">
                <h3>{item.heading}</h3>
                <p className="moneys">
                  <span>{item.money}</span>
                  <span className="month-money">{item.monthmoney}</span>
                </p>
                <div className="olcha-data-card-buttons">
                  <button className="cart-btn">
                    <PiShoppingCartSimple />
                  </button>
                  <button className="buy-btn">Muddatli to`lov</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OlchaData;
