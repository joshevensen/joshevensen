type props = {
  name: string;
  title: string;
  startAt: string;
  endAt?: string;
  borderColor: string;
};

const WorkItem: React.FC<props> = ({
  name,
  title,
  startAt,
  endAt = "present",
  borderColor,
}) => {
  return (
    <div className={`pl-3 border-l-4 ${borderColor}`}>
      <p className="text-xl font-bold leading-none">{name}</p>

      <div className="mt-2 flex justify-between items-center text-blue leading-none">
        <p>{title}</p>
        <p className="text-sm">
          {startAt} - {endAt}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
