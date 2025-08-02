import style from "./QR.module.css";

const QR = () => {
  return (
    <div className={style.qr_container}>
      <img className={style.qr_image} src="../../public/image-qr.png" alt="" />
    </div>
  );
};

export default QR;
