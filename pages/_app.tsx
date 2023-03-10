import "@/styles/reset.css";

import type { AppProps } from "next/app";
import WebLayout from "@/components/WebLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NOT JUST A DEVELOPER</title>
        <meta name="description" content="Never doubt yourself" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    </>
  );
}
