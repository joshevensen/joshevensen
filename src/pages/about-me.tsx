import SideWidget from "@/components/SideWidget";
import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import { HeartIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Josh Evensen | About Me</title>
      </Head>

      <PageHero heading="My name is Josh Evensen, you killed my father...">
        Wait no you didn't. Okay so my jokes may be a little lame but luckily
        I'm a better SaaS builder than I am a comedian.
      </PageHero>

      <PageContainer>
        <div className="flex justify-between">
          <div className="space-y-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              consequatur, voluptatum eveniet, ratione perspiciatis illo facilis
              sed autem laudantium soluta blanditiis? At distinctio est,
              provident in voluptatibus animi qui a?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              dolore, corporis natus, iste optio dolores dolor nulla nostrum
              molestiae maxime quia rerum corrupti praesentium, ut doloribus
              veniam non minus nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quod iste ducimus fuga enim officiis pariatur aperiam natus quos
              recusandae consequuntur, placeat tenetur! Facere aperiam
              architecto cumque eaque, pariatur ea?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio explicabo ipsum dolorem alias nulla eligendi deleniti
              eveniet iste, cum cumque quasi voluptates sed quo iusto ipsa ut
              quos architecto reiciendis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              consequatur, voluptatum eveniet, ratione perspiciatis illo facilis
              sed autem laudantium soluta blanditiis? At distinctio est,
              provident in voluptatibus animi qui a?
            </p>
          </div>

          <div className="ml-12">
            <SideWidget
              heading="These are a few of my favorite things"
              icon={<HeartIcon className="w-5 h-5 mr-2" />}
              width="w-96"
            >
              <div>
                <p>React, NextJS, ReactNative</p>

                <p></p>
              </div>
            </SideWidget>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default AboutPage;
