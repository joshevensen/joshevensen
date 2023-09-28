import JoshAvatar from "@/components/JoshAvatar";

type props = {
  children: any;
  heading: string;
  includeAvatar?: boolean;
};

const PageHero: React.FC<props> = ({ children, heading, includeAvatar }) => {
  return (
    <div className="bg-blue-dark">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <section className="pt-8 md:pt-4 pb-8 lg:py-20 text-beige-200">
          <div className="md:flex md:items-center max-w-3xl">
            {includeAvatar && (
              <div className="mr-8 mb-4 md:mb-0">
                <JoshAvatar isLarge={true} />
              </div>
            )}

            <h1 className="text-4xl sm:text-6xl font-bold !leading-[1.1] tracking-wide">
              {heading}
            </h1>
          </div>

          <div className={`max-w-4xl ${includeAvatar ? "md:pl-24" : ""}`}>
            <p className="mt-6 text-xl sm:text-2xl !leading-normal">
              {children}
            </p>
          </div>
        </section>
      </div>

      <div>
        <div className="bg-orange h-2 w-full"></div>
        <div className="bg-yellow h-2 w-full"></div>
        <div className="bg-green h-2 w-full"></div>
        <div className="bg-blue h-2 w-full"></div>
      </div>
    </div>
  );
};

export default PageHero;
