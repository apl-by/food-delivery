import Image from "next/image";
import styles from "./review-card.module.scss";
import StarIcon from "../../../public/icons/star.svg";
import StarFilledIcon from "../../../public/icons/star-filled.svg";
import DownArrowIcon from "../../../public/icons/down-arrow.svg";
import LikeIcon from "../../../public/icons/like.svg";
import UnLikeIcon from "../../../public/icons/unlike.svg";
import classNames from "classnames/bind";
import Button from "../button/button";

let cx = classNames.bind(styles);

type ReviewCardProps = {
  mix?: string;
};

const ReviewCard = ({ mix }: ReviewCardProps) => {
  const cnCard = cx("card", mix);

  return (
    <div className={cnCard}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["title-wrapper"]}>
          <p className={styles["rating-title"]}>{"Overall rating"}</p>
          <div className={styles["rating-wrapper"]}>
            <p className={styles["rating-value"]}> {"4.2"}</p>
            {[...Array(5).keys()].map((i, ind) =>
              i + 1 <= 4 ? <StarFilledIcon key={ind} /> : <StarIcon key={ind} />
            )}
            <p className={styles["rating-sign"]}> {"3 votes"}</p>
          </div>
        </div>
        <Button onClick={() => void 0} disabled mod={"review-card"}>
          {"Leave review"}
        </Button>
        <div className={styles["header-border"]}></div>
      </div>
      <div className={styles["sort-selector"]}>
        <p className={styles["selector-text"]}>
          <span className={styles["selector-filter"]}>{"Sort by:"}</span>
          <span className={styles["selector-option"]}>{"Newest first"}</span>
          <DownArrowIcon />
        </p>
      </div>
      <div className={styles["review-wrapper"]}>
        <div className={styles["avatar-wrapper"]}>
          <Image
            src={"/review-avatar-1.png"}
            alt={"avatar"}
            className={styles.image}
            width={32}
            height={32}
            priority={true}
          />
        </div>
        <div className={styles["content-wrapper"]}>
          <h3 className={styles.name}>{"Savannah Miles"}</h3>
          <div className={styles["rating-wrapper"]}>
            {[...Array(5).keys()].map((i, ind) =>
              i + 1 <= 5 ? <StarFilledIcon key={ind} /> : <StarIcon key={ind} />
            )}
            <p className={styles["rating-sign"]}> {"10 days ago"}</p>
          </div>
          <p className={styles.review}>
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione repellendus, blanditiis"
            }
          </p>
          <div className={styles["like-wrapper"]}>
            <div className={styles["icon-wrapper"]}>
              <LikeIcon />
              <span className={styles["like-span"]}>14</span>
            </div>
            <div className={styles["icon-wrapper"]}>
              <UnLikeIcon />
              <span className={styles["like-span"]}>4</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles["review-wrapper"]}>
        <div className={styles["avatar-wrapper"]}>
          <Image
            src={"/review-avatar-2.png"}
            alt={"avatar"}
            className={styles.image}
            width={32}
            height={32}
            priority={true}
          />
        </div>
        <div className={styles["content-wrapper"]}>
          <h3 className={styles.name}>{"Jacob Jones"}</h3>
          <div className={styles["rating-wrapper"]}>
            {[...Array(5).keys()].map((i, ind) =>
              i + 1 <= 4 ? <StarFilledIcon key={ind} /> : <StarIcon key={ind} />
            )}
            <p className={styles["rating-sign"]}> {"1 day ago"}</p>
          </div>
          <p className={styles.review}>
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione repellendus, blanditiis"
            }
          </p>
          <div className={styles["like-wrapper"]}>
            <div className={styles["icon-wrapper"]}>
              <LikeIcon />
              <span className={styles["like-span"]}>10</span>
            </div>
            <div className={styles["icon-wrapper"]}>
              <UnLikeIcon />
              <span className={styles["like-span"]}>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
