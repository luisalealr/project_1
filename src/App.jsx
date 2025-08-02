import { Route, Routes } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Error } from "./pages/Error/Error";
import { NavBar } from "./components/NavBar";
import Card from "./pages/QR/Card";
import style from "./App.module.css"
import { CardInfo } from "./pages/Home/CardInfo";

const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className={style.container}>
        <Routes>
          <Route path="/" element={<CardInfo />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/qr" element={<Card />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
