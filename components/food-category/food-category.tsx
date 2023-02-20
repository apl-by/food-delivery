import Image from "next/image";
import styles from "./food-category.module.scss";
import classNames from "classnames/bind";
import { memo } from "react";
import { FoodCategoryTitle } from "../../data/data";

let cx = classNames.bind(styles);

type FoodCategoryProps = {
  icon: string;
  title: FoodCategoryTitle;
  checked: boolean;
  onClick: (value: string) => void;
};

const FoodCategory = ({ icon, title, checked, onClick }: FoodCategoryProps) => {
  const handleClick = (e: React.SyntheticEvent) => {
    onClick(title);
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

export default memo(FoodCategory);
