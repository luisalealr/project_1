import { FaStar } from "react-icons/fa6";
import style from "./InfoHome.module.css";

export const TitleInfo = () => {
  return (
    <div className={style.title_container} >
      <p>Twenty One Pilots</p>
      <div className={style.star}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
};
