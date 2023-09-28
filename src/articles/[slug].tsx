import { Article } from "@/data/models/Article";
import { siteConfig } from "@/site.config";
import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import LibMarkdown from "@/library/Markdown";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Head from "next/head";
import Link from "next/link";

type props = {
  article: Article;
};

export const getStaticProps = ((context) => {
  const slug = context.params!.slug;

  const article = Article.get(String(slug));

  return {
    props: { article },
    revalidate: siteConfig.articles.revalidateTime,
  };
}) satisfies GetStaticProps<props>;

export const getStaticPaths = (() => {
  const slugs = Article.slugs();

  const paths = slugs.map((slug: string) => {
    return {
      params: {
        slug: slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

const ArticlePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  const metaTitle = `Josh Evensen | ${article.title}`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>

      <PageHero heading={article.title}>{article.excerpt}</PageHero>

      <PageContainer>
        <div className="flex items-center mb-4">
          <Link href="/articles">Back to Blog</Link>
          <p className="ml-4 italic">
            Written {article.publishedAt}{" "}
            {article.updatedAt && `Last Updated ${article.updatedAt}`}
          </p>
        </div>

        <LibMarkdown>{article.content}</LibMarkdown>
      </PageContainer>
    </>
  );
};

export default ArticlePage;
