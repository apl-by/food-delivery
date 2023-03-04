import { asidePortalId, modalPortalId } from "@/data/settings";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id={asidePortalId}></div>
        <div id={modalPortalId}></div>
        <NextScript />
      </body>
    </Html>
  );
}
