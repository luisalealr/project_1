import { BotonesShop } from "./BotonesShop";
import { ImageShop } from "./ImageShop"
import { InfoProduct } from "./InfoProduct";
import style from "./Shop.module.css";

export const InfoShop = () => {
    return (
        <div className={style.container}>
            <ImageShop />
            <InfoProduct />
            <BotonesShop />
        </div>
    )
}
