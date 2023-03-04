import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useReducer } from "react";
import type { NextPage } from "next";
import { StateContext } from "@/contexts/stateContext";
import { Nunito } from "@next/font/google";
import AuthProvider from "@/components/auth-provider/auth-provider";
import { Portal } from "@/components/_common/portal/portal";
import { modalPortalId } from "@/data/settings";
import ModalReLogin from "@/components/_common/modal-re-login/modal-re-login";
import { initialState, reducer } from "@/services/reducer/reducer";

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
            {/* <Portal id={modalPortalId}>
              <ModalReLogin onClose={() => void 0} onSubmit={() => void 0} />
            </Portal> */}
          </>
        )}
      </AuthProvider>
    </StateContext.Provider>
  );
}
