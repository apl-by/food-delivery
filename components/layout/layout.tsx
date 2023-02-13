import { ReactNode } from "react";
import styles from "./layout.module.scss";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
