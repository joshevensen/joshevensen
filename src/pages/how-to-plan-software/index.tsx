import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import Head from "next/head";

const HowToPlanSoftware: React.FC = () => {
  return (
    <>
      <Head>
        <title>Josh Evensen | How to Plan Software</title>
      </Head>

      <PageHero heading="How to plan software from the very first step">
        This is my book
      </PageHero>

      <PageContainer>
        <div>
          <h4>Table of Contents</h4>

          <ul>
            <li>Where to Start</li>
            <li>Lots of Questions</li>
            <li>Data Schema</li>
            <li>Feature Planning</li>
            <li>Code Structure</li>
            <li>Packages, Frameworks, and Services</li>
          </ul>
        </div>
      </PageContainer>
    </>
  );
};

export default HowToPlanSoftware;
