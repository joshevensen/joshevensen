import fs from "fs";
import path from "path";
import matter from "gray-matter";
import IFile from "../data/interfaces/file.interface";

const baseDirectory = path.join(process.cwd(), "/src/data/content");

export function getFileNames(directory: string) {
  const directoryPath = path.join(baseDirectory, directory);
  return fs.readdirSync(directoryPath);
}

export function getFile(fileIdentifier: string, directory: string) {
  const directoryPath = path.join(baseDirectory, directory);

  // removes any file extension
  const slug = fileIdentifier.replace(/\.md$/, "");

  const filePath = path.join(directoryPath, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Split the file into yaml data and markdown content
  const { data, content } = matter(fileContent);

  const file: IFile = {
    data,
    content,
    slug,
  };

  return file;
}

export function getFiles(directory: string) {
  const fileNames = getFileNames(directory);

  const files: IFile[] = fileNames.map((fileName) =>
    getFile(fileName, directory)
  );

  return files;
}
