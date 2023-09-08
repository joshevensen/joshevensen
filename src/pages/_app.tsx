import PageFooter from "@/layout/PageFooter";
import PageHeader from "@/layout/PageHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-full">
      <Head>
        <title>Josh Evensen</title>
      </Head>

      <PageHeader />

      <Component {...pageProps} />

      <PageFooter />
    </div>
  );
}
