import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";

type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
};

export const getStaticProps: GetStaticProps<{
  article: Article;
}> = async () => {
  return { props: { article: { slug: "hello", title: "Hello World" } } };
};

export default function ArticlePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Josh Evensen | {article.title}</title>
      </Head>
    </>
  );
}
