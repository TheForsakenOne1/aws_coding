export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">AWS Coding Guide</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Your comprehensive resource for mastering AWS development, from fundamentals to advanced coding patterns.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/basics" className="hover:text-amber-400 transition-colors">AWS Basics</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition-colors">Services Guide</a></li>
              <li><a href="/interview" className="hover:text-amber-400 transition-colors">Interview Prep</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">AWS Official</a></li>
              <li><a href="https://docs.aws.amazon.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">AWS Docs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AWS Coding Guide. Built for learning purposes.</p>
        </div>
      </div>
    </footer>
  );
}
