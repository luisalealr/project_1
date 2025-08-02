import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Error } from "./pages/Error/Error";
import { NavBar } from "./components/NavBar";
import Card from "./pages/QR/Card";
import style from "./App.module.css"

const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className={style.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/qr" element={<Card />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
