import { Link } from "react-router-dom"
import style from "./InfoHome.module.css";

export const BotonesInfo = () => {
  return (
    <div className={style.botones}>
        <Link className={style.boton_primario}>Read More</Link>
        <Link className={style.boton_secundario}>Contact</Link>
    </div>
  )
}
