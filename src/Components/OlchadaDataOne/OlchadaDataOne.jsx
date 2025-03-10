import { OLCHADATAONE, OLCHADATATWO } from "../../Mock/OIchaDataOne";
import "./OlchadaDataOne.css";
import { Link } from "react-router-dom";

const OlchadaDataOne = () => {
  return (
    <div className="container">
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
              <div className="olcha-data-one-card" key={index}>
                <img src={item.twoimg} alt={item.twoheading} />
                <h2>{item.twoheading}</h2>
                <del>{item.twodelmoney}</del>
                <p>{item.twomoney}</p>
                <p>{item.twomonthmoney}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OlchadaDataOne;
