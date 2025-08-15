import Link from "next/link";
import ArticleCard from "./article-card";

interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  featuredImage?: string;
  publishedAt: number;
  readingTime: number;
  viewCount?: number;
}

interface SidebarProps {
  latestArticles: Article[];
  popularArticles: Article[];
  categories: Array<{
    _id: string;
    name: string;
    slug: string;
    color?: string;
  }>;
}

const Sidebar = ({
  latestArticles,
  popularArticles,
  categories,
}: SidebarProps) => {
  return (
    <aside className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Get Inc. Magazine delivered to your inbox
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Join 1M+ entrepreneurs who get our daily newsletter
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          By subscribing, you agree to our Terms and Privacy Policy
        </p>
      </div>

      {/* Latest Articles */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Latest Articles
        </h3>
        <div className="space-y-4">
          {latestArticles.slice(0, 5).map((article) => (
            <ArticleCard key={article._id} article={article} variant="small" />
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Most Popular
        </h3>
        <div className="space-y-4">
          {popularArticles.slice(0, 5).map((article) => (
            <ArticleCard key={article._id} article={article} variant="small" />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/category/${category.slug}`}
              className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color || "#dc2626" }}
                />
                <span className="text-gray-700 group-hover:text-red-600 font-medium">
                  {category.name}
                </span>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Advertisement Placeholder */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <div className="text-gray-400 mb-2">Advertisement</div>
        <div className="bg-white h-48 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-gray-400">Ad Space</span>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Follow Inc.
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="#"
            className="flex items-center justify-center space-x-2 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <span className="font-medium">Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-2 p-3 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-colors"
          >
            <span className="font-medium">Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-2 p-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-2 p-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            <span className="font-medium">YouTube</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
