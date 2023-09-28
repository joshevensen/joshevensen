import LibButton from "@/library/Button";
import { LinkIcon } from "@heroicons/react/24/outline";

type props = {
  children: any;
  href: string;
};

const BadgeLink: React.FC<props> = ({ children, href }) => {
  return (
    <LibButton
      href={href}
      isExternalLink={true}
      isOutlined={true}
      isRounded={true}
      isSmall={true}
      iconLeft={<LinkIcon className="h-4 w-4 mr-1" />}
    >
      {children}
    </LibButton>
  );
};

export default BadgeLink;
