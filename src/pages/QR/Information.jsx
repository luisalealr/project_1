import Description from "./Description";
import Title from "./Title";
import style from "./Information.module.css";

const Information = () => {
  return (
    <div className={style.information_container}>
      <Title />
      <Description />
    </div>
  );
};

export default Information;
