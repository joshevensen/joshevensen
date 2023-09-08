type props = {
  children: any;
  heading: string;
  icon: React.ReactNode;
  width?: string;
};

const SideWidget: React.FC<props> = ({
  children,
  heading,
  icon,
  width = "w-72",
}) => {
  return (
    <div>
      <p className="mb-3 flex items-center text-sm font-semibold uppercase text-blue">
        {icon} {heading}
      </p>

      <div className={`${width} space-y-6 pl-2`}>{children}</div>
    </div>
  );
};

export default SideWidget;
