type props = {
  children?: any;
};

const PageContainer: React.FC<props> = ({ children }) => {
  return (
    <div className="max-w-6xl pt-8 pb-4 md:py-16 px-6 xl:px-0 mx-auto text-blue-dark">
      {children}
    </div>
  );
};

export default PageContainer;
