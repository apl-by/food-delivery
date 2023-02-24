import { settings } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import SettingItem from "../setting-item/setting-item";
import styles from "./setting-list.module.scss";

const SettingList = () => {
  const { pathname } = useRouter();

  return (
    <section className={styles["setting-list"]}>
      <h2 className={styles.title}>{"Settings"}</h2>
      <ul className={styles.list}>
        {settings.map((i) => (
          <li className={styles.item} key={i.id}>
            <Link href={i.to} className={styles.link}>
              <SettingItem
                title={i.title}
                description={i.description}
                icon={pathname === i.to ? i.iconActive : i.iconDefault}
                isActive={pathname === i.to}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SettingList;
