import { NavItem } from "@/data/data";
import Link from "next/link";
import styles from "./nav-bar.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type NavBarProps = {
  currentPath: string;
  navData: NavItem[];
  mix?: string;
  mod?: "column";
};

const NavBar = ({ currentPath, navData, mix, mod }: NavBarProps) => {
  const cnNav = cx("nav", mix);
  const cnList = cx("list", { [`list-${mod}`]: mod });
  const cnItem = cx("item", { [`item-${mod}`]: mod });

  return (
    <nav className={cnNav}>
      <ul className={cnList}>
        {navData.map((i) => (
          <li className={cnItem} key={i.id}>
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
