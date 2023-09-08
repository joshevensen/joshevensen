import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import PostSummary from "@/components/PostSummary";
import LibButton from "@/library/Button";
import Head from "next/head";

const ArticlesPage: React.FC = () => {
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
          <PostSummary isWide={true} />
          <PostSummary isWide={true} />
          <PostSummary isWide={true} />
          <PostSummary isWide={true} />
          <PostSummary isWide={true} />
          <PostSummary isWide={true} />
          <PostSummary isWide={true} />
        </div>

        <div className="flex justify-between mt-4 max-w-4xl pt-3 border-t border-tealLight">
          <p className="text-teal">Showing 1 to 10 of 20 results</p>

          <div className="flex space-x-4">
            <LibButton isOutlined={true}>Prev</LibButton>
            <LibButton isOutlined={true}>Next</LibButton>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default ArticlesPage;
