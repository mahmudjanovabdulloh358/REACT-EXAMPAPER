// App CSS
import "./App.css";
// Components
import Headers from "./Components/Header/Headers";
// import Footer from "./Components/Footer/Footer";
// Routes,Route,Pages
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import OlchaQoldan from "./Pages/OlchaQoldan/OlchaQoldan";
import MuddatliTolov from "./Pages/MuddatliTolov/MuddatliTolov";
import Chegirmalar from "./Pages/Chegirmalar/Chegirmalar";
import YutuqliOyinlar from "./Pages/YutuqliOyinlar/YutuqliOyinlar";
import SaytXaritasi from "./Pages/SaytXaritasi/SaytXaritasi";
import OlchadaSoting from "./Pages/OlchadaSoting/OlchadaSoting";
import Uzb from "./Pages/Uzb/Uzb";
import Uz from "./Pages/Uz/Uz";
import Rus from "./Pages/Rus/Rus";
import Taqqoslash from "./Pages/Taqqoslash/Taqqoslash";
import Sevimlilar from "./Pages/Sevimlilar/Sevimlilar";
import Savatcha from "./Pages/Savatcha/Savatcha";
import Kirish from "./Pages/Kirish/Kirish";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const location = useLocation();

  if (location.pathname.includes("/Kirish")) {
    return <Kirish />;
  }
  return (
    <>
      <Headers />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OlchaQo'ldan" element={<OlchaQoldan />} />
        <Route path="/MuddatliTolov" element={<MuddatliTolov />} />
        <Route path="/Chegirmalar" element={<Chegirmalar />} />
        <Route path="/YutuqliOyinlar" element={<YutuqliOyinlar />} />
        <Route path="/SaytXaritasi" element={<SaytXaritasi />} />
        <Route path="/OlchadaSoting" element={<OlchadaSoting />} />
        <Route path="/Uzb" element={<Uzb />} />
        <Route path="/Uz" element={<Uz />} />
        <Route path="Rus" element={<Rus />} />
        <Route path="Taqqoslash" element={<Taqqoslash />} />
        <Route path="Sevimlilar" element={<Sevimlilar />} />
        <Route path="Savatcha" element={<Savatcha />} />
        <Route path="Kirish" element={<Kirish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
