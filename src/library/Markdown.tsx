import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

type props = {
  children: any;
};

const LibMarkdown: React.FC<props> = ({ children }) => {
  const components = {
    // This one is for images, because images are wrapped by <p> tags
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/articles/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(code: any) {
      const { className, children } = code;
      let language = null;

      if (className) {
        language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      }

      return (
        <SyntaxHighlighter style={tomorrow} language={language} PreTag="div">
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <div className="prose">
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
};

export default LibMarkdown;
