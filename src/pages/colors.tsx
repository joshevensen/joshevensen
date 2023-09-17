import PageContainer from "@/layout/PageContainer";

const ColorsPage: React.FC = () => {
  return (
    <PageContainer>
      {/* Light Colors */}
      <div>
        <div className="mb-8">
          <div className="h-2 bg-orange-light"></div>
          <div className="h-2 bg-yellow-light"></div>
          <div className="h-2 bg-teal-light"></div>
          <div className="h-2 bg-blue-light"></div>
        </div>

        <div className="grid gap-12 grid-cols-4">
          <div className="border-4 border-orange-light p-4 ring-4 ring-offset-4 ring-orange-light">
            <p className="mb-4 text-2xl text-orange-light font-bold">Hello</p>
            <div className="h-24 w-full bg-orange-light">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-yellow-light p-4 ring-4 ring-offset-4 ring-yellow-light">
            <p className="mb-4 text-2xl text-yellow-light font-bold">Hello</p>
            <div className="h-24 w-full bg-yellow-light">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-teal-light p-4 ring-4 ring-offset-4 ring-teal-light">
            <p className="mb-4 text-2xl text-teal-light font-bold">Hello</p>
            <div className="h-24 w-full bg-teal-light">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-blue-light p-4 ring-4 ring-offset-4 ring-blue-light">
            <p className="mb-4 text-2xl text-blue-light font-bold">Hello</p>
            <div className="h-24 w-full bg-blue-light">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>
        </div>
      </div>

      {/* Default Colors */}
      <div className="my-20">
        <div className="mb-8">
          <div className="h-2 bg-orange"></div>
          <div className="h-2 bg-yellow"></div>
          <div className="h-2 bg-teal"></div>
          <div className="h-2 bg-blue"></div>
        </div>

        <div className="grid gap-12 grid-cols-4">
          <div className="border-4 border-orange p-4 ring-4 ring-offset-4 ring-orange">
            <p className="mb-4 text-2xl text-orange font-bold">Hello</p>
            <div className="h-24 w-full bg-orange">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-yellow p-4 ring-4 ring-offset-4 ring-yellow">
            <p className="mb-4 text-2xl text-yellow font-bold">Hello</p>
            <div className="h-24 w-full bg-yellow">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-teal p-4 ring-4 ring-offset-4 ring-teal">
            <p className="mb-4 text-2xl text-teal font-bold">Hello</p>
            <div className="h-24 w-full bg-teal">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-blue p-4 ring-4 ring-offset-4 ring-blue">
            <p className="mb-4 text-2xl text-blue font-bold">Hello</p>
            <div className="h-24 w-full bg-blue">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Colors */}
      <div>
        <div className="mb-8">
          <div className="h-2 bg-orange-dark"></div>
          <div className="h-2 bg-yellow-dark"></div>
          <div className="h-2 bg-teal-dark"></div>
          <div className="h-2 bg-blue-dark"></div>
        </div>

        <div className="grid gap-12 grid-cols-4">
          <div className="border-4 border-orange-dark p-4 ring-4 ring-offset-4 ring-orange-dark">
            <p className="mb-4 text-2xl text-orange-dark font-bold">Hello</p>
            <div className="h-24 w-full bg-orange-dark">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-yellow-dark p-4 ring-4 ring-offset-4 ring-yellow-dark">
            <p className="mb-4 text-2xl text-yellow-dark font-bold">Hello</p>
            <div className="h-24 w-full bg-yellow-dark">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-teal-dark p-4 ring-4 ring-offset-4 ring-teal-dark">
            <p className="mb-4 text-2xl text-teal-dark font-bold">Hello</p>
            <div className="h-24 w-full bg-teal-dark">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>

          <div className="border-4 border-blue-dark p-4 ring-4 ring-offset-4 ring-blue-dark">
            <p className="mb-4 text-2xl text-blue-dark font-bold">Hello</p>
            <div className="h-24 w-full bg-blue-dark">
              <p className="p-4 text-2xl text-beige font-bold">World</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ColorsPage;
