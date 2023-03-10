import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../components/_layouts/layout/layout";
import type { NextPageWithLayout } from "./_app";

const Deals: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: "30px auto",
          fontWeight: "600",
          fontSize: "20px",
          maxWidth: "calc(var(--max-width-content) + 2 * var(--side-padding))",
          padding: "0 var(--side-padding)",
        }}
      >
        {"Any data for the route '/deals'"}
        <p style={{ fontWeight: "400", fontSize: "14px" }}>
          {
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, natus dicta cum quo, amet esse commodi perferendis quasi tempora sit odio obcaecati ducimus? Veniam aliquid dolorum ex provident? A, tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, natus dicta cum quo, amet esse commodi perferendis quasi tempora sit odio obcaecati ducimus? Veniam aliquid dolorum ex provident? A, tempora."
          }
        </p>
      </div>
    </>
  );
};

Deals.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Deals;
