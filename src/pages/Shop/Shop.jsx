import { InfoShop } from "./InfoShop";
import style from "./Shop.module.css";

export const Shop = () => {
  return (
      <div className={style.card}>
        <InfoShop />
      </div>
    );
}
