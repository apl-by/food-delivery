import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Nunito } from "@next/font/google";
import { OrderContext, OrderType } from "@/contexts/orderContext";

const nunito = Nunito({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// example of a fake order
const fakeOrder: OrderType = {
  get totalCount() {
    return this.orders.reduce((prev, i) => {
      return prev + i.count;
    }, 0);
  },
  orders: [
    {
      id: 0,
      restaurant: "Burgers & Pizza",
      category: "Pizza",
      meal: "pepperoni",
      count: 2,
    },
    {
      id: 1,
      restaurant: "Royal Sushi House",
      category: "Sushi",
      meal: "filadelfia",
      count: 1,
    },
  ],
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <OrderContext.Provider value={fakeOrder}>
      {getLayout(
        <>
          <style jsx global>{`
            html {
              font-family: ${nunito.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </>
      )}
    </OrderContext.Provider>
  );
}
