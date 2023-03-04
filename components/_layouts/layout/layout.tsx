import { ReactNode } from "react";
import Header from "../../_common/header/header";
import styles from "./layout.module.scss";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  // if (user?.isLoggedIn === false || !user) return null;

  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
