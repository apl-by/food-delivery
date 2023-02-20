import Image from "next/image";
import styles from "./promo.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type PromoProps = {
  img: string;
  alt: string;
  mod: "primary" | "secondary";
  title: string;
  info: string;
  category: string;
};

const Promo = ({ img, alt, mod, title, info, category }: PromoProps) => {
  const cnPromo = cx("promo", `promo-${mod}`);
  const cnInfo = cx("info", `info-${mod}`);

  return (
    <div className={cnPromo}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={img}
          alt={alt}
          width={298}
          height={188}
          priority={true}
          className={styles.image}
        />
      </div>
      <div className={styles["info-wrapper"]}>
        <h2 className={styles.title}>{title}</h2>
        <p className={cnInfo}>{info}</p>
        <p className={styles.category}>{category}</p>
      </div>
    </div>
  );
};

export default Promo;
