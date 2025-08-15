"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ArticleCard from "@/components/article-card";
import Sidebar from "@/components/sidebar";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;

  const categoryArticles = useQuery(api.articles.getArticlesByCategory, {
    category: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1),
  });
  const latestArticles = useQuery(api.articles.getPublishedArticles, {});
  const categories = useQuery(api.articles.getCategories);

  if (!categoryArticles || !latestArticles || !categories) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading articles...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryName =
    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  const articles = latestArticles.page || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <span>→</span>
            <span className="text-gray-900">{categoryName}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600">
            Latest articles about {categoryName.toLowerCase()}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="lg:col-span-2">
            {categoryArticles.length > 0 ? (
              <div className="space-y-8">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium text-gray-900 mb-2">
                  No articles found
                </h2>
                <p className="text-gray-600 mb-6">
                  There are no articles in the {categoryName.toLowerCase()}{" "}
                  category yet.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
                >
                  Browse All Articles
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              latestArticles={articles}
              popularArticles={articles.sort(
                (a, b) => (b.viewCount || 0) - (a.viewCount || 0)
              )}
              categories={categories}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
