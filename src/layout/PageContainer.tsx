type props = {
  children?: any;
};

const PageContainer: React.FC<props> = ({ children }) => {
  return (
    <div className="max-w-6xl py-16 px-4 mx-auto text-blueDark">{children}</div>
  );
};

export default PageContainer;
