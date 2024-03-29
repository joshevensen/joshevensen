const PageFooter: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto mt-4">
      <div className="py-3 border-t border-beige-300">
        {/* <nav className="space-x-4">
          <Link className="text-sm text-blue-dark font-bold" href="/">
            Home
          </Link>
          <Link className="text-sm text-blue-dark font-bold" href="/articles">
            Articles
          </Link>
        </nav> */}

        <p className="text-center text-sm text-text-light">
          &copy; Josh Evensen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
