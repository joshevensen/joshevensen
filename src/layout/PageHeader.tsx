import JoshAvatar from "@/components/JoshAvatar";
import LibButton from "@/library/Button";
import Link from "next/link";
import NavLink from "./NavLink";

const PageHeader: React.FC = () => {
  return (
    <div className="bg-blue-dark text-background">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <header className="flex items-center justify-between py-6 lg:pt-16">
          <Link
            className="flex items-center text-beige hover:text-yellow"
            href="/"
          >
            <JoshAvatar />

            <p className="ml-4 text-2xl sm:text-4xl font-medium">
              Josh Evensen
            </p>
          </Link>

          <div className="flex items-center space-x-12">
            <nav className="space-x-6">
              <NavLink href="/articles">Articles</NavLink>
            </nav>

            <LibButton href="/talk-to-me">Talk To Me!</LibButton>
          </div>
        </header>
      </div>
    </div>
  );
};

export default PageHeader;
