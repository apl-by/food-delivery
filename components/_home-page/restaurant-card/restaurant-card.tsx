import Image from "next/image";
import styles from "./restaurant-card.module.scss";
import CartIcon from "../cart-icon/cart-icon";
import ClockIcon from "../../../public/icons/clock.svg";
import { DataToDisplay } from "@/pages";
import ChipCategory from "../chip-category/chip-category";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type RestaurantCardProps = {
  data: DataToDisplay;
};

const RestaurantCard = ({ data }: RestaurantCardProps) => {
  const { img, deliveryTime, ordersCount, title, minSum, featured } = data;
  return (
    <div className={styles.card}>
      {featured && <div className={styles["is-featured"]}>{"FEATURED"}</div>}
      <div className={styles["image-wrapper"]}>
        <Image
          src={img}
          alt={title}
          className={styles.image}
          width={350}
          height={160}
        />
      </div>
      <div className={styles["content-wrapper"]}>
        <h3 className={styles.title}>
          {title}{" "}
          <CartIcon
            mod={ordersCount > 0 ? "active" : undefined}
            badgeContent={ordersCount > 0 ? ordersCount : undefined}
          />
        </h3>
        <p className={styles.info}>
          <ClockIcon className={styles["clock-icon"]} />
          {`${deliveryTime} min`}
          <span className={styles.dot}></span>
          {`$${minSum} min sum`}
        </p>
        {data?.filteredMenu && (
          <div className={styles["chips-wrapper"]}>
            {data.filteredMenu.map((i, ind) => (
              <ChipCategory title={i} key={ind} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
