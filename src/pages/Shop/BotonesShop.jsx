import { Link } from "react-router-dom";
import style from "./Shop.module.css";

export const BotonesShop = () => {
  return (
    <div className={style.botones}>
        <Link className={style.boton_secundario}>Contact</Link>
        <Link className={style.boton_secundario}>Contact</Link>
    </div>
  )
}
