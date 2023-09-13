import { getFile, getFileNames, getFiles } from "../../helpers/content.helper";
import IFile from "../interfaces/file.interface";

function convertFileToArticle(file: IFile) {
  const publishedAtString = file.data.publishedAt ? file.data.publishedAt : null;

  const updatedAtString = file.data.updatedAt ? file.data.updatedAt : null;

  const publishedAt = new Date(publishedAtString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const updatedAt = new Date(updatedAtString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {
    title: file.data.title ? file.data.title : "",
    publishedAt,
    updatedAt,
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
    public publishedAt: string | null,
    public updatedAt: string | null,
    public slug: string,
    public excerpt: string,
    public isFeatured: boolean,
    public publish: boolean,
    public content: string
  ) {}

  static slugs() {
    const fileNames = getFileNames(this.directory);
    return fileNames.map((fileName: string) => fileName.replace(/\.md$/, ""));
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
      (fileA: Article, fileB: Article) => (fileA.updatedAt > fileB.updatedAt ? -1 : 1)
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
