'use client';

import { useState } from 'react';

interface CodePlaygroundProps {
  initialCode?: string;
  language?: string;
  title?: string;
  description?: string;
  expectedOutput?: string;
}

export default function CodePlayground({
  initialCode = '',
  language = 'python',
  title = 'Code Playground',
  description,
  expectedOutput,
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('');

    // Simulate code execution
    setTimeout(() => {
      if (expectedOutput) {
        setOutput(expectedOutput);
      } else {
        setOutput('✓ Code executed successfully!\n\nNote: This is a simulation. To run AWS code, use the AWS SDK in your local environment with proper credentials.');
      }
      setIsRunning(false);
    }, 1500);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
              {language}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        {/* Code Editor */}
        <div className="relative">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <span className="text-gray-300 text-sm font-medium">Editor</span>
            <div className="flex space-x-2">
              <button
                onClick={handleReset}
                className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                title="Reset code"
              >
                Reset
              </button>
              <button
                onClick={handleCopy}
                className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                title="Copy code"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-96 p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
            spellCheck={false}
            style={{ tabSize: 2 }}
          />
        </div>

        {/* Output */}
        <div className="relative">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <span className="text-gray-300 text-sm font-medium">Output</span>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`px-4 py-1 text-xs font-semibold rounded transition-all ${
                isRunning
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              {isRunning ? (
                <span className="flex items-center">
                  <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Running...
                </span>
              ) : (
                '▶ Run Code'
              )}
            </button>
          </div>
          <div className="h-96 p-4 bg-gray-900 overflow-auto">
            {output ? (
              <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
                {output}
              </pre>
            ) : (
              <div className="text-gray-500 text-sm italic">
                Click "Run Code" to see the output...
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-amber-50 px-6 py-3 border-t border-amber-200">
        <div className="flex items-start space-x-2">
          <svg
            className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> This is a learning playground. To run actual AWS code,
            configure AWS credentials locally and use the AWS SDK or CLI.
          </p>
        </div>
      </div>
    </div>
  );
}
