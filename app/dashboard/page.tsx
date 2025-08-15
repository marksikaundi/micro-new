"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ArticleCard from "@/components/article-card";
import Link from "next/link";
import { PlusCircle, Edit3 } from "lucide-react";

export default function DashboardPage() {
  const { isSignedIn, user } = useUser();
  const userArticles = useQuery(
    api.articles.getArticlesByUser,
    user?.id ? { userId: user.id } : "skip"
  );

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Please sign in to view your dashboard
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.firstName || "Writer"}!
            </h1>
            <p className="text-gray-600">
              Manage your articles and create new content
            </p>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admin"
                className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Write New Article</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Edit3 className="w-5 h-5" />
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>

          {/* Articles Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {userArticles?.length || 0}
              </h3>
              <p className="text-gray-600">Total Articles</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {userArticles?.filter((article) => article.isPublished)
                  .length || 0}
              </h3>
              <p className="text-gray-600">Published</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {userArticles?.filter((article) => !article.isPublished)
                  .length || 0}
              </h3>
              <p className="text-gray-600">Drafts</p>
            </div>
          </div>

          {/* User's Articles */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Articles
            </h2>

            {userArticles && userArticles.length > 0 ? (
              <div className="space-y-8">
                {userArticles.map((article) => (
                  <div key={article._id} className="relative">
                    <ArticleCard article={article} />
                    {!article.isPublished && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          Draft
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <div className="max-w-md mx-auto">
                  <PlusCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    No articles yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Start sharing your insights with the world by creating your
                    first article.
                  </p>
                  <Link
                    href="/admin"
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
                  >
                    <PlusCircle className="w-5 h-5" />
                    <span>Create Your First Article</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
