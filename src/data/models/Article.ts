import { getFile, getFileNames, getFiles } from "../../helpers/content.helper";
import IFile from "../interfaces/file.interface";

function convertFileToArticle(file: IFile) {
  const publishedAtString = file.data.publishedAt
    ? file.data.publishedAt
    : null;

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
    publish: file.data.publish ? file.data.publish : false,
    publishedAt,
    updatedAt: updatedAtString ? updatedAt : null,
    slug: file.slug ? file.slug : "",
    title: file.data.title ? file.data.title : "",
    excerpt: file.data.excerpt ? file.data.excerpt : "",
    content: file.content ? file.content : "",
  };
}

export class Article {
  static directory = "/articles";

  constructor(
    public publish: boolean,
    public publishedAt: string,
    public updatedAt: string | null,
    public slug: string,
    public title: string,
    public excerpt: string,
    public content: string
  ) {}

  static slugs() {
    const fileNames = getFileNames(this.directory);
    return fileNames.map((fileName: string) => fileName.replace(/\.md$/, ""));
  }

  static list() {
    const fileData = getFiles(this.directory);

    const articles: Article[] = fileData.map((file: IFile) => {
      return convertFileToArticle(file);
    });

    // Only return articles that have publish === true
    const publishedArticles = articles.filter((article) => article.publish);

    // Sort articles so newer articles first
    const sortedArticles = publishedArticles.sort(
      (fileA: Article, fileB: Article) => {
        const fileADate = fileA.updatedAt ? fileA.updatedAt : fileA.publishedAt;
        const fileBDate = fileB.updatedAt ? fileB.updatedAt : fileB.publishedAt;

        return fileADate > fileBDate ? -1 : 1;
      }
    );

    return sortedArticles;
  }

  static get(slug: string) {
    const file = getFile(slug, this.directory);

    return convertFileToArticle(file);
  }
}
