interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  return (
    <div className="relative rounded-xl bg-gray-900 p-6 my-6 overflow-x-auto">
      <div className="absolute top-4 right-4 text-gray-500 text-xs font-mono">{language}</div>
      <pre className="text-gray-100 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
