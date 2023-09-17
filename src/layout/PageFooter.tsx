import Link from "next/link";

const PageFooter: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto mt-8 px-4">
      <div className="py-3 border-t border-teal-light">
        {/* <nav className="space-x-4"> */}
        {/* <Link className="text-sm text-blue-dark font-bold" href="/">
            Home
          </Link>
          <Link className="text-sm text-blue-dark font-bold" href="/articles">
            Articles
          </Link>
          <Link
            className="text-sm text-blue-dark font-bold"
            href="/software-ideas"
          >
            Software Ideas
          </Link>
          <Link className="text-sm text-blue-dark font-bold" href="/favorites">
            Favorites
          </Link>
          <Link className="text-sm text-blue-dark font-bold" href="/talk-to-me">
            Contact
          </Link> */}
        {/* </nav> */}

        <p className="text-center text-sm text-blue">
          &copy; Josh Evensen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
