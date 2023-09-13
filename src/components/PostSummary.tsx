import { Article } from "@/data/models/Article";
import { useRouter } from "next/router";

type props = {
  article: Article;
  isWide?: boolean;
};

const PostSummary: React.FC<props> = ({ article, isWide = false }) => {
  const router = useRouter();
  let dateClasses = "text-blue";

  if (isWide) {
    dateClasses += " flex-shrink-0 w-48 pt-4";
  } else {
    dateClasses += " pl-3 text-sm";
  }

  function goToArticle() {
    router.push(`/articles/${article.slug}`);
  }

  return (
    <div className={isWide ? "flex" : ""}>
      <p className={dateClasses}>
        {article.updatedAt ? article.updatedAt : article.publishedAt}
      </p>

      <div
        onClick={goToArticle}
        className="flex-grow p-3 cursor-pointer hover:bg-beigeDark"
      >
        <h3 className="mb-1 text-3xl font-bold">{article.title}</h3>

        <p>{article.excerpt}</p>

        <p className="mt-4 text-sm text-orange">Read Article {">"}</p>
      </div>
    </div>
  );
};

export default PostSummary;
