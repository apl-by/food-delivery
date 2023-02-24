import Image from "next/image";
import styles from "./setting-item.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type SettingItemProps = {
  icon: string;
  title: string;
  description: string;
  isActive: boolean;
};

const SettingItem = ({
  icon,
  title,
  description,
  isActive,
}: SettingItemProps) => {
  const cnItem = cx("item", { [`item-active`]: isActive });

  return (
    <div className={cnItem}>
      <Image src={icon} alt={title} width={40} height={40} />
      <div className={styles["content-wrapper"]}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default SettingItem;
