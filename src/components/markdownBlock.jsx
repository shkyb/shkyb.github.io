import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// For short, inline-style content (like a single sentence with bold)
const inlineComponents = {
  p: ({ children }) => <>{children}</>,
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-stone-900" {...props} />
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
    <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-900 font-mono text-sm" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 pl-4 italic text-stone-500" {...props} />
  ),
};

export default function MarkdownText({ children }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={inlineComponents}>
      {children}
    </ReactMarkdown>
  );
}