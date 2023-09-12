import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import PostSummary from "@/components/PostSummary";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Article } from "@/data/models/Article";
import LibPagination from "@/library/Pagination";
import { siteConfig } from "@/data/site.config";

type props = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<props> = () => {
  const articles = Article.list();

  return {
    props: {
      articles: articles,
    },
  };
};

const ArticlesPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ articles }) => {
  const articleCount = articles.length;
  let currentPage = 1;

  return (
    <>
      <Head>
        <title>Josh Evensen | Articles</title>
      </Head>

      <PageHero heading="I'll write about anything really, but mostly software...">
        Here are all my random thoughts that are safe to allow out of my head.
        You may not want to know about the others.
      </PageHero>

      <PageContainer>
        <div className="max-w-4xl space-y-16">
          {articles.map((article) => (
            <PostSummary key={article.slug} article={article} isWide={true} />
          ))}
        </div>

        {/* {articleCount > 10 && (
          <LibPagination
            label="article"
            total={articleCount}
            perPage={siteConfig.pagination.perPage}
            currentPage={currentPage}
          />
        )} */}
      </PageContainer>
    </>
  );
};

export default ArticlesPage;
