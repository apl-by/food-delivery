import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useMemo, useReducer } from "react";
import type { NextPage } from "next";
import { StateContext } from "@/contexts/state-context";
import { Nunito } from "@next/font/google";
import AuthProvider from "@/components/auth-provider/auth-provider";
import { Portal } from "@/components/_common/portal/portal";
import { modalPortalId } from "@/data/settings";
import ModalReSignIn from "@/components/_common/modal-re-sign-in/modal-re-sign-in";
import { initialState, reducer } from "@/services/reducer/reducer";
import ModalAlert from "@/components/_common/modal-alert/modal-alert";
import ModalRemove from "@/components/_common/modal-remove/modal-remove";

const nunito = Nunito({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLayout = Component.getLayout || ((page) => page);

  const modalJsx = useMemo(() => {
    if (state.modalQueue.length === 0) return null;
    const data = state.modalQueue[0];
    const modalType = data.modalType;

    if (modalType === "error" || modalType === "notification") {
      const title = modalType === "error" ? "Error" : "Notification";
      return (
        <ModalAlert
          title={title}
          message={data.info.message}
          type={modalType}
        />
      );
    }

    if (modalType === "reSignIn" && data.forInvoke) {
      return <ModalReSignIn data={data.forInvoke} />;
    }
    if (modalType === "remove" && data.forInvoke) {
      return <ModalRemove data={data.forInvoke} />;
    }
    return null;
  }, [state.modalQueue]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AuthProvider>
        {getLayout(
          <>
            <style jsx global>{`
              html {
                font-family: ${nunito.style.fontFamily};
              }
            `}</style>
            <Component {...pageProps} />
            <Portal id={modalPortalId}>{modalJsx}</Portal>
          </>
        )}
      </AuthProvider>
    </StateContext.Provider>
  );
}
