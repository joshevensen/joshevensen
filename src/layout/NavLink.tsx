import Link from "next/link";
import { useRouter } from "next/router";

type props = {
  children: any;
  href: string;
};

const NavLink: React.FC<props> = ({ children, href }) => {
  const { pathname } = useRouter();
  let classes = "py-2 border-b-4 text-beige font-bold";

  if (pathname === href) {
    classes += " border-b-beige";
  } else {
    classes += " border-b-transparent hover:text-yellow";
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
