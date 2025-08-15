"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import { formatDate } from "@/lib/utils";
import { Clock, Eye, Share2 } from "lucide-react";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const article = useQuery(api.articles.getArticleBySlug, { slug });
  const latestArticles = useQuery(api.articles.getPublishedArticles, {});
  const categories = useQuery(api.articles.getCategories);
  const incrementViewCount = useMutation(api.articles.incrementViewCount);

  useEffect(() => {
    if (article?._id) {
      incrementViewCount({ articleId: article._id });
    }
  }, [article?._id, incrementViewCount]);

  if (!article || !latestArticles || !categories) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading article...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/" className="text-red-600 hover:text-red-700 font-medium">
              ← Back to Homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const articles = latestArticles.page || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="space-y-6">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-red-600">Home</Link>
                <span>→</span>
                <Link 
                  href={`/category/${article.category.toLowerCase()}`}
                  className="hover:text-red-600"
                >
                  {article.category}
                </Link>
                <span>→</span>
                <span className="text-gray-900">{article.title}</span>
              </nav>

              {/* Category and Date */}
              <div className="flex items-center space-x-4">
                <Link
                  href={`/category/${article.category.toLowerCase()}`}
                  className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  {article.category}
                </Link>
                <time className="text-gray-500 text-sm">
                  {formatDate(article.publishedAt)}
                </time>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex items-center justify-between py-4 border-y border-gray-200">
                <div className="flex items-center space-x-4">
                  {article.author.avatar ? (
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-600">
                        {article.author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{article.author.name}</p>
                    {article.author.bio && (
                      <p className="text-sm text-gray-500">{article.author.bio}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readingTime} min read</span>
                  </div>
                  {article.viewCount && (
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.viewCount} views</span>
                    </div>
                  )}
                  <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              {article.featuredImage && (
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              latestArticles={articles}
              popularArticles={articles.sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))}
              categories={categories}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
