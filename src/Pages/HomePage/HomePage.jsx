import "./HomePage.css";
// import Swipers from "../../Components/Swipers/Swipers";
import Navbar from "../../Components/Navbar/Navbar";
import OlchaData from "../../Components/OlchaData/OlchaData";
import OlchadaDataOne from "../../Components/OlchadaDataOne/OlchadaDataOne";

const HomePage = () => {
  return (
    <main>
      {/* <Swipers /> */}
      <Navbar />
      <OlchaData />
      <OlchadaDataOne />
    </main>
  );
};

export default HomePage;
