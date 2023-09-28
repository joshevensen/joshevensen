import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BadgeLink from "./BadgeLink";

type props = {
  children: any;
  name: string;
  icon: string;
  label: string;
  link: string;
};

const ProjectItem: React.FC<props> = ({
  children,
  name,
  icon,
  label,
  link,
}) => {
  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4">
          <Image src={icon} alt={label} width={64} height={64} />
        </div>

        <div>
          <p className="mb-1 text-3xl font-bold leading-none tracking-wide">
            {name}
          </p>
          <p className="text-text-light leading-none">{label}</p>
        </div>
      </div>

      <div className="prose">
        <div>{children}</div>
      </div>

      <div className="mt-auto">
        <BadgeLink href={`https://${link}`}>{link}</BadgeLink>
      </div>
    </div>
  );
};

export default ProjectItem;
