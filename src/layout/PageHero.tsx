type props = {
  children: any;
  heading: string;
};

const PageHero: React.FC<props> = ({ children, heading }) => {
  return (
    <div className="bg-blue-dark">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <section className="text-beige pt-4 pb-8 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl !leading-tight">{heading}</h1>
          </div>
          <div className="max-w-4xl">
            <p className="mt-6 text-xl sm:text-2xl !leading-normal">
              {children}
            </p>
          </div>
        </section>
      </div>

      <div>
        <div className="bg-orange h-2 w-full"></div>
        <div className="bg-yellow h-2 w-full"></div>
        <div className="bg-teal h-2 w-full"></div>
        <div className="bg-blue h-2 w-full"></div>
      </div>
    </div>
  );
};

export default PageHero;
