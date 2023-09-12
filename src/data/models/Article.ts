import { getFile, getFileNames, getFiles } from "../../helpers/content.helper";
import IFile from "../interfaces/file.interface";

function convertFileToArticle(file: IFile) {
  const dateString = file.data.date ? file.data.date : null;

  const date = new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {
    title: file.data.title ? file.data.title : "",
    date,
    slug: file.slug ? file.slug : "",
    excerpt: file.data.excerpt ? file.data.excerpt : "",
    isFeatured: file.data.isFeatured ? file.data.isFeatured : false,
    publish: file.data.publish ? file.data.publish : false,
    content: file.content ? file.content : "",
  };
}

export class Article {
  static directory = "/articles";

  constructor(
    public title: string,
    public date: string,
    public slug: string,
    public excerpt: string,
    public isFeatured: boolean,
    public publish: boolean,
    public content: string
  ) {}

  static slugs() {
    const fileNames = getFileNames(this.directory);
    return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  }

  static list(onlyFeatured = false) {
    const fileData = getFiles(this.directory);

    const articles: Article[] = fileData.map((file: IFile) => {
      return convertFileToArticle(file);
    });

    // Only return articles that have publish === true
    const publishedArticles = articles.filter((article) => article.publish);

    // Sort articles so newer articles first
    const sortedArticles = publishedArticles.sort(
      (fileA: Article, fileB: Article) => (fileA.date > fileB.date ? -1 : 1)
    );

    // Optional flag to only return featured articles
    if (onlyFeatured) {
      return sortedArticles.filter((article) => article.isFeatured);
    }

    return sortedArticles;
  }

  static get(slug: string) {
    const file = getFile(slug, this.directory);

    return convertFileToArticle(file);
  }
}
