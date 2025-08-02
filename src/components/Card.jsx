import QR from "./QR";
import style from "./Card.module.css";
import Information from "./Information";

const Card = () => {
  return (
    <div className={style.card_container}>
      <QR />
      <Information />
    </div>
  );
};

export default Card;
