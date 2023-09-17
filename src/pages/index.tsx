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
import { getColor } from "@/helpers/color.helper";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Josh Evensen | Software Consultant</title>
      </Head>

      <PageHero heading="Engineer, Designer, Entrepreneur... Software Consultant">
        Hello World, my name is Josh, I'm just your friendly neighborhood
        Software Consultant. This is a site all about me and the thing I care
        about most: software. Just don't tell my wife ;)
      </PageHero>

      <PageContainer>
        <div className="md:flex md:justify-between">
          <div className="md:flex-grow prose">
            <p>I started coding a decade ago.</p>
            <p>
              I have a deep passion for building not only great looking and
              functioning software, but also maintanable software.
            </p>
            <p>
              It's been 5 years since I've done freelance work and I've decided
              to get back into it. I want to bring the knowledge and experiences
              I've had working on two different software projects to more
              people.
            </p>
            <p>
              I also want to use this website to record my thoughts and
              communicate with other engineers, developers, designers, and
              entrepreneurs about software.
            </p>
          </div>

          <div className="mt-12 md:mt-0 md:ml-16 space-y-12">
            <SideWidget
              heading="Noteable Projects"
              icon={<ComputerDesktopIcon className="h-5 w-5 mr-2" />}
            >
              <ProjectItem
                name="Novelize"
                link="getnovelize.com"
                borderColor={getColor(0, "border-")}
              >
                <p>Novel Writing Software</p>
              </ProjectItem>

              <ProjectItem
                name="Forefront CRM"
                link="forefrontcrm.com"
                borderColor={getColor(1, "border-")}
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
                title="Owner, Founder"
                startAt="2016"
                borderColor={getColor(2, "border-")}
              />

              <WorkItem
                name="Random Noise Media, LLC"
                title="Product Manager"
                startAt="2023"
                borderColor={getColor(3, "border-")}
              />

              <WorkItem
                name="Freedom Driven, LLC"
                title="Software Engineer"
                startAt="2018"
                endAt="2023"
                borderColor={getColor(4, "border-")}
              />
            </SideWidget>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default HomePage;
