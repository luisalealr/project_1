import style from "./QR.module.css";

const QR = () => {
  return (
    <div className={style.qr_container}>
      <img
        className={style.qr_image}
        src="https://icon-library.com/images/qr-code-icon/qr-code-icon-18.jpg"
        alt=""
      />
    </div>
  );
};

export default QR;
