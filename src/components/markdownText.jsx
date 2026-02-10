import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const blockComponents = {
  p: ({ children }) => (
    <p className="text-base text-stone-700 leading-normal">{children}</p>
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-stone-700" {...props} />
  ),
  em: ({ node, ...props }) => (
    <em className="italic text-stone-600" {...props} />
  ),
  a: ({ node, href, ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-red-600 hover:text-red-800 transition-colors"
      {...props}
    />
  ),
  code: ({ node, ...props }) => (
    <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-700 font-mono text-sm" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 pl-4 italic text-stone-500" {...props} />
  ),
};

export default function MarkdownBlock({ children }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={blockComponents}>
      {children}
    </ReactMarkdown>
  );
}
