import Image from "next/image";
import styles from "./food-category.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { FoodCategoryTitle } from "../../data/data";

let cx = classNames.bind(styles);

type FoodCategoryProps = {
  icon: string;
  title: FoodCategoryTitle;
};

const FoodCategory = ({ icon, title }: FoodCategoryProps) => {
  const [checked, setChecked] = useState(false);

  const handleClick = (e: React.SyntheticEvent) => {
    setChecked(!checked);
  };

  const cnCategory = cx("category", { [`category-checked`]: checked });
  const cnTitle = cx("title", { [`title-checked`]: checked });

  return (
    <div className={cnCategory} onClick={handleClick}>
      <Image
        src={icon}
        alt={title}
        width={24}
        height={24}
        className={styles.icon}
      />
      <p className={cnTitle}>{title}</p>
    </div>
  );
};

export default FoodCategory;
