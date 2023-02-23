import Image from "next/image";
import styles from "./meal-card-second.module.scss";
import DecreaseIcon from "../../../public/icons/decrease.svg";
import IncreaseIcon from "../../../public/icons/increase.svg";
import AddIcon from "../../../public/icons/add-second.svg";
import classNames from "classnames/bind";
import Button from "../button/button";

let cx = classNames.bind(styles);

type MealCardSecondProps = {
  mix?: string;
};

const MealCardSecond = ({ mix }: MealCardSecondProps) => {
  const cnCard = cx("card", mix);
  return (
    <div className={cnCard}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={"/nigiri.png"}
          alt={"nigiri set"}
          className={styles.image}
          width={152}
          height={105}
          priority={true}
        />
      </div>
      <div className={styles["content-wrapper"]}>
        <h3 className={styles.title}>{"Nigiri set"}</h3>
        <p className={styles.info}>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione repellendus, blanditiis"
          }
        </p>
        <p className={styles.price}>{"$ 22.56"}</p>
      </div>
      <div className={styles["control-wrapper"]}>
        <div className={styles["count-wrapper"]}>
          <DecreaseIcon />
          <span>1</span>
          <IncreaseIcon />
        </div>
        <Button
          onClick={() => void 0}
          variant={"filled"}
          mod={"meal-card"}
          mix={styles["add-button"]}
          disabled={true}
        >
          <AddIcon />
          {"Add to cart"}
        </Button>
      </div>
    </div>
  );
};

export default MealCardSecond;
