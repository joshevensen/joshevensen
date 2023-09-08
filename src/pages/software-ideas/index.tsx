import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import Head from "next/head";

const IdeasPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Josh Evensen | Software Ideas</title>
      </Head>

      <PageHero heading="There are more software ideas in heaven and earth...">
        So I might as well add even more to the mix. Here are some of my ideas I
        don't have time to build myself.
      </PageHero>

      <PageContainer></PageContainer>
    </>
  );
};

export default IdeasPage;
