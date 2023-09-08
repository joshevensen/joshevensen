import LibButton from "@/library/Button";
import NavLink from "@/layout/NavLink";
import Image from "next/image";
import Link from "next/link";

const PageHeader: React.FC = () => {
  return (
    <div className="bg-blueDark">
      <div className="max-w-6xl mx-auto px-4">
        <header className="flex items-center justify-between py-6">
          <Link
            className="flex items-center text-beige hover:text-yellow"
            href="/"
          >
            <div className="rounded-full overflow-hidden border-2 border-beige">
              <Image
                src="/josh-evensen.jpeg"
                alt="Josh Evensen"
                width={30}
                height={30}
              />
            </div>

            <p className="ml-4 text-2xl font-bold">Josh Evensen</p>
          </Link>

          <div className="flex items-center space-x-12">
            <nav className="space-x-6">
              <NavLink href="/articles">Articles</NavLink>
              <NavLink href="/software-ideas">Software Ideas</NavLink>
              <NavLink href="/about-me">About Me</NavLink>
            </nav>

            <LibButton href="/talk-to-me">Talk To Me!</LibButton>
          </div>
        </header>
      </div>
    </div>
  );
};

export default PageHeader;
