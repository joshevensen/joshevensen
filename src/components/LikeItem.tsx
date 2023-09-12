import { AffiliateLink } from "@/data/interfaces/affiliate-link.interface";
import { LinkIcon } from "@heroicons/react/24/outline";

type props = {
  children: any;
  name: string;
  link?: AffiliateLink;
  borderColor?:
    | "border-blue"
    | "border-teal"
    | "border-yellow"
    | "border-orange";
};

const LikeItem: React.FC<props> = ({
  children,
  name,
  link,
  borderColor = "border-teal",
}) => {
  return (
    <div className={`pl-3 border-l-4 ${borderColor}`}>
      <p className="text-xl font-bold leading-none">{name}</p>

      <div className="mt-2 leading-tight">{children}</div>

      {link && (
        <a
          className="mt-1 flex items-center text-orange hover:text-yellow"
          href={link.link}
          target="_blank"
          rel="noopener"
        >
          <LinkIcon className="h-4 w-4 mr-1" />
          {link.display}
        </a>
      )}
    </div>
  );
};

export default LikeItem;
