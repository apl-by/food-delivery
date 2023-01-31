import { ReactElement } from "react";
import Header from "../header/header";

type MainLayoutProps = { children: ReactElement };

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
