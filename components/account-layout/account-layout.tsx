import { ReactNode } from "react";
import styles from "./account-layout.module.scss";
import classNames from "classnames/bind";
import SettingList from "../_account-page/setting-list/setting-list";
import Layout from "../layout/layout";

let cx = classNames.bind(styles);

type AccountLayoutProps = { children: ReactNode };

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.settings}>
          <SettingList />
        </div>
        <div className={styles.subpage}>{children}</div>
      </main>
    </Layout>
  );
}
