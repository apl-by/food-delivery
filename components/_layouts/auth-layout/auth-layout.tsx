import { ReactNode, useEffect } from "react";
import styles from "./auth-layout.module.scss";
import MealCard from "../../_common/meal-card/meal-card";
import MealCardSecond from "../../_common/meal-card-second/meal-card-second";
import ReviewCard from "../../_common/review-card/review-card";
import classNames from "classnames/bind";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";

let cx = classNames.bind(styles);

type AuthLayoutProps = { children: ReactNode };

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { user, wasFirstAuthCheck } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (wasFirstAuthCheck && user) {
      push("/");
    }
  }, [wasFirstAuthCheck, user]);

  if (!wasFirstAuthCheck || user) return null;

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
