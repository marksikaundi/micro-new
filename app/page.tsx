"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ArticleCard from "@/components/article-card";
import Sidebar from "@/components/sidebar";

export default function HomePage() {
  const featuredArticles = useQuery(api.articles.getFeaturedArticles);
  const publishedArticles = useQuery(api.articles.getPublishedArticles, {});
  const categories = useQuery(api.articles.getCategories);

  if (!featuredArticles || !publishedArticles || !categories) {
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

  const [featuredArticle, ...otherFeatured] = featuredArticles;
  const articles = publishedArticles.page || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        {featuredArticle && (
          <section className="mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Featured Article */}
              <div className="lg:col-span-2">
                <ArticleCard article={featuredArticle} variant="featured" />
              </div>
              
              {/* Side Featured Articles */}
              <div className="space-y-6">
                {otherFeatured.slice(0, 3).map((article) => (
                  <ArticleCard key={article._id} article={article} variant="small" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Breaking News Banner */}
        <section className="mb-8">
          <div className="bg-red-600 text-white px-6 py-3 rounded-lg">
            <div className="flex items-center space-x-4">
              <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                BREAKING
              </span>
              <p className="text-sm md:text-base">
                Latest business news and entrepreneurship insights - Stay ahead of the curve
              </p>
            </div>
          </div>
        </section>

        {/* Main Content and Sidebar */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Latest Articles Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <a href="/articles" className="text-red-600 hover:text-red-700 font-medium">
                  View All →
                </a>
              </div>
              
              <div className="grid gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            </section>

            {/* Category Sections */}
            <section>
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {articles
                    .filter((article) => article.category.toLowerCase() === "leadership")
                    .slice(0, 4)
                    .map((article) => (
                      <ArticleCard key={article._id} article={article} variant="small" />
                    ))}
                </div>
              </div>
            </section>

            <section>
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Innovation</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {articles
                    .filter((article) => article.category.toLowerCase() === "innovation")
                    .slice(0, 4)
                    .map((article) => (
                      <ArticleCard key={article._id} article={article} variant="small" />
                    ))}
                </div>
              </div>
            </section>
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
    </div>
  );
}
