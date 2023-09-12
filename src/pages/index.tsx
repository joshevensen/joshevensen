import SideWidget from "@/components/SideWidget";
import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import ProjectItem from "@/components/ProjectItem";
import WorkItem from "@/components/WorkItem";
import {
  BuildingOffice2Icon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import { Article } from "@/data/models/Article";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import PostSummary from "@/components/PostSummary";
import { siteConfig } from "@/data/site.config";

type props = {
  featuredArticles: Article[];
};

export const getStaticProps: GetStaticProps<props> = () => {
  const featuredArticles = Article.list(true);

  return {
    props: {
      featuredArticles: featuredArticles,
    },
  };
};

const HomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  featuredArticles,
}) => {
  return (
    <>
      <Head>
        <title>Josh Evensen | SaaS Builder</title>
      </Head>

      <PageHero heading="Developer, Designer, Geek... SaaS Builder">
        Hello World, my name is Josh, I'm just your friendly neighborhood SaaS
        builder. This is a site all about me and the thing I care about most:
        software. Just don't tell my wife ;)
      </PageHero>

      <PageContainer>
        <div className="flex justify-between">
          <div className="flex-grow space-y-12">
            {featuredArticles.map((article) => (
              <PostSummary key={article.slug} article={article} />
            ))}
          </div>

          <div className="space-y-12 ml-16">
            <SideWidget
              heading="Noteable Projects"
              icon={<ComputerDesktopIcon className="h-5 w-5 mr-2" />}
            >
              <ProjectItem
                name="Novelize"
                link="getnovelize.com"
                borderColor="border-orange"
              >
                <p>Novel Writing Software</p>
              </ProjectItem>

              <ProjectItem
                name="Forefront CRM"
                link="forefrontcrm.com"
                borderColor="border-yellow"
              >
                <p>Real Estate Investor Software</p>
              </ProjectItem>
            </SideWidget>

            <SideWidget
              heading="Past Work"
              icon={<BuildingOffice2Icon className="h-5 w-5 mr-2" />}
            >
              <WorkItem
                name="Even7 Development, LLC"
                title="Owner"
                startAt="2016"
                borderColor="border-teal"
              />

              <WorkItem
                name="Random Noise Media, LLC"
                title="Product Manager"
                startAt="2023"
                borderColor="border-blue"
              />

              <WorkItem
                name="Freedom Driven, LLC"
                title="Software Manager"
                startAt="2018"
                endAt="2023"
                borderColor="border-orange"
              />
            </SideWidget>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default HomePage;
