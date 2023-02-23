import { ReactNode } from "react";
import styles from "./auth-layout.module.scss";

type AuthLayoutProps = { children: ReactNode };
import classNames from "classnames/bind";
import MealCard from "../_common/meal-card/meal-card";
import MealCardSecond from "../_common/meal-card-second/meal-card-second";
import ReviewCard from "../_common/review-card/review-card";

let cx = classNames.bind(styles);

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className={styles.main}>
      <div className={styles["left-wrapper"]}>{children}</div>
      <div className={styles["right-wrapper"]}>
        <div className={styles["cards-wrapper"]}>
          <MealCard mix={styles["meal-card"]} />
          <MealCardSecond mix={styles["meal-card-second"]} />
          <ReviewCard mix={styles["review-card"]} />
        </div>
        <h2 className={styles["review-title"]}>
          {"Leave reviews for all meals"}
        </h2>
        <p className={styles["review-text"]}>
          {
            "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel."
          }
        </p>
      </div>
    </main>
  );
}
