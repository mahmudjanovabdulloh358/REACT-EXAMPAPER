import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link>
          <img
            src="https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/X2ckhhQIq86ZuWGBEjv0Q4zWoCWENIJvZ4szw91JMXJKrWkYqWAEOprqdigy.jpg"
            alt="URL img"
          />
        </Link>

        <Link>
          <img
            src="https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/XxKCcjtNNbvkbKgtil9FcIgxTg0qHY7cKBx942ZbNgG3L1fAbayWXzLZV1F6.jpg"
            alt="URL img"
          />
        </Link>

        <Link>
          <img
            src="https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/Z7IPjvspAgfMyJJDZ5PF5EtsnV7Or0xwkymSFsjEOVi4E6rP0QTlWMR2uXlG.jpg"
            alt="URL img"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
