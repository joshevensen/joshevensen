import { LinkIcon } from "@heroicons/react/24/outline";

type props = {
  children: any;
  name: string;
  link: string;
  borderColor: string;
};

const ProjectItem: React.FC<props> = ({
  children,
  name,
  link,
  borderColor,
}) => {
  return (
    <div className={`pl-3 border-l-4 ${borderColor}`}>
      <p className="mb-1 text-xl font-bold leading-none">{name}</p>

      <div className="flex items-start flex-wrap">
        <div className="sm:mb-1 mr-4">{children}</div>
        <a
          className="flex items-center text-orange hover:text-yellow"
          href={`https://${link}`}
          target="_blank"
          rel="noopener"
        >
          <LinkIcon className="h-4 w-4 mr-1" />
          {link}
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
