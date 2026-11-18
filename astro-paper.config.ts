import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: process.env.SITE_URL || "https://example.com",
    title: "My Issue Blog",
    description: "",
    author: "Dylan",
    authorAvatar: "/avatar.jpg",
    authorBio: "用 GitHub Issues 记录思考与沉淀",
    profile: "https://github.com/dylanbai8/my-issue-blog",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 8,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/dylanbai8/my-issue-blog/issues/new?template=blog.md" },
  ],
  shareLinks: [],
  comments: {
    enabled: false,
  },
});
