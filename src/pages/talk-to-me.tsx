import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import Head from "next/head";

const HirePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Josh Evensen | Hire Me</title>
      </Head>

      <PageHero heading="Been around the world, I speak many computer languages...">
        Talk nerdy to me. No really let's talk about norse mythology, keyboards,
        D&D, or maybe about that software project you need help with.
      </PageHero>

      <PageContainer></PageContainer>
    </>
  );
};

export default HirePage;
