import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Nunito } from "@next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
