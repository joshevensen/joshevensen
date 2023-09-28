import PageFooter from "@/layout/PageFooter";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-full">
      <Head>
        <title>Josh Evensen</title>
      </Head>

      <Component {...pageProps} />

      <PageFooter />
    </div>
  );
}
