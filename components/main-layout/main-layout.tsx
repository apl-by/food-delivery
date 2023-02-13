import { ReactElement } from "react";
import Layout from "../layout/layout";
import Header from "../header/header";

type MainLayoutProps = { children: ReactElement };

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout>
      <Header />
      <main>{children}</main>
    </Layout>
  );
}
