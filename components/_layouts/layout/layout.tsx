import { useAppState } from "@/hooks/use-app-state";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Header from "../../_common/header/header";
import styles from "./layout.module.scss";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  const { user, wasFirstAuthCheck } = useAuth();
  const { push } = useRouter();
  const { state } = useAppState();
  const exampleMod = state.exampleMod;

  useEffect(() => {
    if (wasFirstAuthCheck && !user && !exampleMod) {
      push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wasFirstAuthCheck, user, exampleMod]);

  if (!wasFirstAuthCheck || (!user && !exampleMod)) return null;

  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
