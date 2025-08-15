import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

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

interface ArticleCardProps {
  article: Article;
  variant?: "featured" | "default" | "small";
}

const ArticleCard = ({ article, variant = "default" }: ArticleCardProps) => {
  const cardClasses = {
    featured: "grid md:grid-cols-2 gap-6 items-center",
    default: "space-y-4",
    small: "flex gap-4 items-start",
  };

  const imageClasses = {
    featured: "aspect-[16/10] w-full",
    default: "aspect-[16/10] w-full",
    small: "w-24 h-16 flex-shrink-0",
  };

  return (
    <article className={`group ${cardClasses[variant]}`}>
      {/* Image */}
      <div className={`relative overflow-hidden rounded-lg ${imageClasses[variant]}`}>
        {article.featuredImage ? (
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
            <span className="text-red-600 font-bold text-lg">Inc.</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={variant === "small" ? "flex-1 min-w-0" : ""}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              href={`/category/${article.category.toLowerCase()}`}
              className="text-red-600 hover:text-red-700 font-medium uppercase tracking-wide"
            >
              {article.category}
            </Link>
            <span className="text-gray-400">•</span>
            <time className="text-gray-500">{formatDate(article.publishedAt)}</time>
          </div>

          <Link href={`/article/${article.slug}`}>
            <h3 className={`font-bold text-gray-900 group-hover:text-red-600 transition-colors ${
              variant === "featured" 
                ? "text-2xl md:text-3xl leading-tight" 
                : variant === "small"
                ? "text-sm leading-snug"
                : "text-xl leading-tight"
            }`}>
              {article.title}
            </h3>
          </Link>

          {variant !== "small" && (
            <p className="text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              {article.author.avatar ? (
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">
                    {article.author.name.charAt(0)}
                  </span>
                </div>
              )}
              <span className="text-sm text-gray-600">{article.author.name}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <span>{article.readingTime} min read</span>
              {article.viewCount && (
                <>
                  <span>•</span>
                  <span>{article.viewCount} views</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
