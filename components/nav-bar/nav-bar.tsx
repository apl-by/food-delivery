import Link from "next/link";
import styles from "./nav-bar.module.scss";

const navItems = [
  { id: 0, title: "Restaurants", link: "/restaurants" },
  { id: 1, title: "Deals", link: "/deals" },
  { id: 2, title: "My orders", link: "/orders" },
];

const NavBar = ({}) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((i) => (
          <li className={styles.item} key={i.id}>
            <Link className={styles.link} href={i.link}>
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
