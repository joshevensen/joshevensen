type props = {
  children: any;
  heading: string;
  icon: React.ReactNode;
};

const SideWidget: React.FC<props> = ({ children, heading, icon }) => {
  return (
    <div>
      <p className="mb-3 flex items-center text-sm font-semibold uppercase text-blue">
        {icon} {heading}
      </p>

      <div className={`md:w-72 space-y-6 sm:pl-2`}>{children}</div>
    </div>
  );
};

export default SideWidget;
