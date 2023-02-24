import { ReactNode } from "react";
import Header from "../_common/header/header";
import styles from "./layout.module.scss";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
