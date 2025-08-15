import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  articles: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    author: v.object({
      name: v.string(),
      avatar: v.optional(v.string()),
      bio: v.optional(v.string()),
    }),
    featuredImage: v.optional(v.string()),
    publishedAt: v.number(),
    readingTime: v.number(), // in minutes
    isPublished: v.boolean(),
    viewCount: v.optional(v.number()),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_published", ["isPublished", "publishedAt"])
    .searchIndex("search_title", {
      searchField: "title",
    }),

  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    color: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  comments: defineTable({
    articleId: v.id("articles"),
    author: v.object({
      name: v.string(),
      email: v.string(),
      avatar: v.optional(v.string()),
    }),
    content: v.string(),
    parentId: v.optional(v.id("comments")),
    createdAt: v.number(),
    isApproved: v.boolean(),
  })
    .index("by_article", ["articleId"])
    .index("by_parent", ["parentId"]),
});
