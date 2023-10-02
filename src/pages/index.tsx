import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import ProjectItem from "@/components/ProjectItem";
import Head from "next/head";
import LibDivider from "@/library/Divider";
import ContactForm from "@/components/ContactForm";
import BadgeLink from "@/components/BadgeLink";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Josh Evensen | Software Builder</title>
      </Head>

      <PageHero
        heading="Software engineer, founder, and huge geek"
        includeAvatar={true}
      >
        Hello World, my name is Josh Evensen. I'm just your friendly
        neighborhood Software Builder and this is a site all about the thing I
        care about most: software. Just don't tell my wife ;)
      </PageHero>

      <PageContainer>
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          <ProjectItem
            name="Bad Frog Yarn Co"
            icon="/images/projects/bad-frog-yarn-co/bad-frog-yarn-co-icon.png"
            label="Hand Dyed Yarn Store"
            link="badfrogyarnco.com"
          >
            <p>
              A new Shopify store selling yarn my wife's hand dyed yarn. I'm in
              charge of the design and administration for the store.
            </p>
          </ProjectItem>

          <LibDivider className="lg:hidden" />

          <ProjectItem
            name="Novelize"
            icon="/images/projects/novelize/novelize-icon.png"
            label="Novel Writing Software"
            link="getnovelize.com"
          >
            <p>
              This is the first SaaS project I built and is still active since
              2016. It's how first learned PHP and Vue.
            </p>
          </ProjectItem>

          <LibDivider className="lg:hidden" />

          <ProjectItem
            name="Forefront CRM"
            icon="/images/projects/forefront/forefront-icon.png"
            label="Real Estate Investor CRM"
            link="forefrontcrm.com"
          >
            <p>
              I've been working with the Forefront team since 2018. I've been
              the UI designer, frontend developer, and software manager over the
              years.
            </p>
          </ProjectItem>
        </div>

        <LibDivider />

        <div className="max-w-xl mx-auto lg:max-w-none lg:flex lg:justify-between">
          <div className="lg:w-[30rem] mb-8 lg:mb-0 lg:mr-12 prose prose-xl">
            <h3>Josh Evensen...</h3>

            <p>
              I started coding a little over a decade ago. I started out taking
              designs and turning them into websites.
            </p>

            <p>
              Nowadays I enjoy building and thinking about software. This site
              is my place to showcase what I'm working at the moment and to
              share some of my thoughts.
            </p>

            <p>
              I'm an introvert and not much into social media. However, there
              are a few places you can find me online:
            </p>

            <div className="flex space-x-6">
              <BadgeLink href="https://github.com/joshevensen">
                Github
              </BadgeLink>

              <BadgeLink href="https://www.upwork.com/freelancers/~01179721661b612701">
                Upwork
              </BadgeLink>
            </div>
          </div>

          <ContactForm />
        </div>
      </PageContainer>
    </>
  );
};

export default HomePage;
