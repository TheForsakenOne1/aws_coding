import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  category?: string;
}

export default function ServiceCard({ title, description, href, icon, category }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-amber-400 h-full flex flex-col">
        {category && (
          <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full w-fit mb-4">
            {category}
          </span>
        )}
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
          Learn more
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
