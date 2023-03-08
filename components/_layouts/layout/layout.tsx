import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Header from "../../_common/header/header";
import styles from "./layout.module.scss";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  const { user, wasFirstAuthCheck } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (wasFirstAuthCheck && !user) {
      push("/login");
    }
  }, [wasFirstAuthCheck, user]);

  if (!wasFirstAuthCheck || !user) return null;

  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
