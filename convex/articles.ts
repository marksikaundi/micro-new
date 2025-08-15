import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all published articles with pagination
export const getPublishedArticles = query({
  args: {
    paginationOpts: v.optional(v.object({
      numItems: v.number(),
      cursor: v.optional(v.string()),
    })),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let articlesQuery = ctx.db
      .query("articles")
      .withIndex("by_published", (q) => q.eq("isPublished", true))
      .order("desc");

    if (args.category) {
      articlesQuery = articlesQuery.filter((q) => q.eq(q.field("category"), args.category));
    }

    if (args.paginationOpts) {
      const paginationOptions = {
        numItems: args.paginationOpts.numItems,
        cursor: args.paginationOpts.cursor || null,
      };
      return await articlesQuery.paginate(paginationOptions);
    }

    return { page: await articlesQuery.take(10), isDone: false, continueCursor: "" };
  },
});

// Get featured articles (latest 5)
export const getFeaturedArticles = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_published", (q) => q.eq("isPublished", true))
      .order("desc")
      .take(5);
  },
});

// Get article by slug
export const getArticleBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

// Get articles by category
export const getArticlesByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .filter((q) => q.eq(q.field("isPublished"), true))
      .order("desc")
      .take(20);
  },
});

// Search articles
export const searchArticles = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("articles")
      .withSearchIndex("search_title", (q) => q.search("title", args.searchTerm))
      .filter((q) => q.eq(q.field("isPublished"), true))
      .take(10);
  },
});

// Get all categories
export const getCategories = query({
  handler: async (ctx) => {
    return await ctx.db.query("categories").collect();
  },
});

// Create a new article
export const createArticle = mutation({
  args: {
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
    readingTime: v.number(),
    isPublished: v.boolean(),
  },
  handler: async (ctx, args) => {
    const articleId = await ctx.db.insert("articles", {
      ...args,
      publishedAt: Date.now(),
      viewCount: 0,
    });
    return articleId;
  },
});

// Update view count
export const incrementViewCount = mutation({
  args: { articleId: v.id("articles") },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.articleId);
    if (article) {
      await ctx.db.patch(args.articleId, {
        viewCount: (article.viewCount || 0) + 1,
      });
    }
  },
});
