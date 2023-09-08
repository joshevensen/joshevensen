import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";

type Idea = {
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
};

export const getStaticProps: GetStaticProps<{
  idea: Idea;
}> = async () => {
  return { props: { idea: { slug: "hello", title: "Hello World" } } };
};

export default function IdeaPage({
  idea,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Josh Evensen | {idea.title}</title>
      </Head>
    </>
  );
}
