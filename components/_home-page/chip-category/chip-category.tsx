import Image from "next/image";
import styles from "./chip-category.module.scss";
import {
  categories,
  FoodCategoryTitle,
  CategoriesData,
} from "../../../data/data";

type ChipCategoryProps = {
  title: FoodCategoryTitle;
};

const ChipCategory = ({ title }: ChipCategoryProps) => {
  const data = categories.find((i) => i.title === title) as CategoriesData;
  return (
    <div className={styles.category}>
      <Image
        src={data.icon}
        alt={data.title}
        width={12}
        height={12}
        className={styles.icon}
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default ChipCategory;
