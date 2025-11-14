import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">{post.icon}</div>
            <div>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-2">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span>By {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-gray-600 mb-8 pb-8 border-b-2 border-gray-200">
            {post.excerpt}
          </div>

          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{relatedPost.icon}</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-semibold">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-600">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
