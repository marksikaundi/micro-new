"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { calculateReadingTime, slugify } from "@/lib/utils";
import { useUser, SignInButton } from "@clerk/nextjs";

export default function AdminPage() {
  const [isCreating, setIsCreating] = useState(false);
  const { isSignedIn, user } = useUser();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Leadership",
    tags: "",
    authorName: user?.fullName || "",
    authorAvatar: user?.imageUrl || "",
    authorBio: "",
    featuredImage: "",
    isPublished: false,
  });

  const createArticle = useMutation(api.articles.createArticle);
  const categories = useQuery(api.articles.getCategories);

  // Update form data when user loads
  useState(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        authorName: user.fullName || "",
        authorAvatar: user.imageUrl || "",
      }));
    }
  });

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Authentication Required
            </h1>
            <p className="text-gray-600 mb-6">
              You need to sign in to access the admin panel and create articles.
            </p>
            <SignInButton mode="modal">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium">
                Sign In to Continue
              </button>
            </SignInButton>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      await createArticle({
        title: formData.title,
        slug: slugify(formData.title),
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        tags: tagsArray,
        author: {
          name: formData.authorName,
          avatar: formData.authorAvatar || undefined,
          bio: formData.authorBio || undefined,
          userId: user?.id,
        },
        featuredImage: formData.featuredImage || undefined,
        readingTime: calculateReadingTime(formData.content),
        isPublished: formData.isPublished,
        createdBy: user?.id,
      });

      // Reset form
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        category: "Leadership",
        tags: "",
        authorName: "",
        authorAvatar: "",
        authorBio: "",
        featuredImage: "",
        isPublished: false,
      });

      alert("Article created successfully!");
    } catch (error) {
      console.error("Error creating article:", error);
      alert("Error creating article. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Create New Article
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Basic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    {categories?.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    )) || [
                      <option key="leadership" value="Leadership">
                        Leadership
                      </option>,
                      <option key="innovation" value="Innovation">
                        Innovation
                      </option>,
                      <option key="technology" value="Technology">
                        Technology
                      </option>,
                      <option key="growth" value="Growth">
                        Growth
                      </option>,
                      <option key="money" value="Money">
                        Money
                      </option>,
                      <option key="productivity" value="Productivity">
                        Productivity
                      </option>,
                    ]}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="excerpt"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Brief description of the article..."
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="startup, innovation, technology"
                />
              </div>
            </div>

            {/* Content */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Content
              </h2>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Article Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={20}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono text-sm"
                  placeholder="Write your article content here..."
                />
                <p className="text-sm text-gray-500 mt-1">
                  Estimated reading time:{" "}
                  {calculateReadingTime(formData.content)} minutes
                </p>
              </div>
            </div>

            {/* Author Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Author Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="authorName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Author Name *
                  </label>
                  <input
                    type="text"
                    id="authorName"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="authorAvatar"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Author Avatar URL
                  </label>
                  <input
                    type="url"
                    id="authorAvatar"
                    name="authorAvatar"
                    value={formData.authorAvatar}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="authorBio"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Author Bio
                </label>
                <input
                  type="text"
                  id="authorBio"
                  name="authorBio"
                  value={formData.authorBio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Senior Writer at Inc. Magazine"
                />
              </div>
            </div>

            {/* Media */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Media
              </h2>

              <div>
                <label
                  htmlFor="featuredImage"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Featured Image URL
                </label>
                <input
                  type="url"
                  id="featuredImage"
                  name="featuredImage"
                  value={formData.featuredImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Publishing Options */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Publishing Options
              </h2>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isPublished"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="isPublished"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Publish immediately
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isCreating}
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreating ? "Creating..." : "Create Article"}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
