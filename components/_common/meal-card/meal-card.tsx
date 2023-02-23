import Image from "next/image";
import styles from "./meal-card.module.scss";
import AddIcon from "../../../public/icons/add.svg";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type MealCardProps = {
  mix?: string;
};

const MealCard = ({ mix }: MealCardProps) => {
  const cnCard = cx("card", mix);

  return (
    <div className={cnCard}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={"/resraurants/kobe.png"}
          alt={"role set"}
          className={styles.image}
          width={267}
          height={151}
          priority={true}
        />
      </div>
      <div className={styles["content-wrapper"]}>
        <h3 className={styles.title}>{"Roll set"}</h3>
        <p className={styles.info}>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione repellendus, blanditiis"
          }
        </p>

        <div className={styles["price-wrapper"]}>
          <p>{"$ 22.56"}</p>
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
