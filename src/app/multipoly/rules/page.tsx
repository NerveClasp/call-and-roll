import Header from "@/components/Header";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ node, ...props }) => (
    <h1 className="text-4xl font-bold mb-6 mt-8" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-3xl font-semibold mb-4 mt-6" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-2xl font-medium mb-3 mt-5" {...props} />
  ),
  p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
  a: ({ node, ...props }) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline transition-colors"
      {...props}
    />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc list-inside mb-4 " {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-decimal list-inside mb-4 " {...props} />
  ),
  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
  strong: ({ node, ...props }) => (
    <strong className="font-semibold " {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-blue-400 pl-4 italic my-4"
      {...props}
    />
  ),
  code: ({ node, ...props }) => (
    <code
      className="bg-slate-100 rounded px-1 py-0.5 text-sm font-mono text-pink-600"
      {...props}
    />
  ),
};
// This function runs on the server side
function getRulesContent() {
  try {
    console.log("Current working directory:", process.cwd());

    const filePath = path.join(
      process.cwd(),
      "src/app",
      "multipoly/rules",
      "rules.md",
    );
    console.log("Resolved file path:", filePath);
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    console.error("Error reading rules.md:", error);
    return "# Rules not found";
  }
}

export default function page() {
  const rulesContent = getRulesContent();

  return (
    <>
      <Header
        links={[
          { name: "Multipoly", href: "/multipoly" },
          { name: "Rules", href: "/multipoly/rules" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <article className="prose prose-lg prose-headings:prose-p:prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-strong:prose-code:text-pink-600 prose-pre:bg-slate-100 prose-ol:prose-ul:max-w-none">
          <ReactMarkdown components={components}>{rulesContent}</ReactMarkdown>
        </article>
      </div>
    </>
  );
}
