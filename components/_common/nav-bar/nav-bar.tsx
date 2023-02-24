import { NavItem } from "@/data/data";
import Link from "next/link";
import styles from "./nav-bar.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type NavBarProps = {
  currentPath: string;
  navData: NavItem[];
};

const NavBar = ({ currentPath, navData }: NavBarProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navData.map((i) => (
          <li className={styles.item} key={i.id}>
            <Link
              className={cx("link", {
                ["link-active"]: currentPath === i.link,
              })}
              href={i.link}
            >
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
