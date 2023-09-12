import Link from "next/link";

const PageFooter: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto mt-8 px-4">
      <div className="flex justify-between items-center py-5 border-t border-tealLight">
        <nav className="space-x-4">
          <Link className="text-sm text-blueDark font-bold" href="/">
            Home
          </Link>
          <Link className="text-sm text-blueDark font-bold" href="/articles">
            Blog
          </Link>
          {/* <Link
            className="text-sm text-blueDark font-bold"
            href="/software-ideas"
          >
            Software Ideas
          </Link> */}
          <Link className="text-sm text-blueDark font-bold" href="/about-me">
            About Me
          </Link>
        </nav>
        <p className="text-sm text-blue">
          &copy; Josh Evensen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
