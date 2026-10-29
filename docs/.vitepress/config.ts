import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Eclipse Team Guidelines",
  description:
    "How the Eclipse team contributes, reviews and works with AI tools.",
  base: "/.github/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/.github/EclipseLogo_small.png" }]],
  themeConfig: {
    logo: "/EclipseLogo_small.png",
    nav: [
      { text: "Contributor", link: "/contributor" },
      { text: "Reviewer", link: "/reviewer" },
      { text: "Reviewee", link: "/reviewee" },
      { text: "AI", link: "/ai" },
    ],
    sidebar: [
      {
        text: "Guidelines",
        items: [
          { text: "Contributor", link: "/contributor" },
          {
            text: "Reviewer",
            link: "/reviewer",
            collapsed: false,
            items: [
              { text: "What to look for", link: "/reviewer/what-to-look-for" },
              { text: "Navigating code reviews", link: "/reviewer/navigating-code-reviews" },
              { text: "Giving feedback", link: "/reviewer/giving-feedback" },
            ],
          },
          { text: "Reviewee", link: "/reviewee" },
          {
            text: "AI",
            link: "/ai",
            collapsed: false,
            items: [
              { text: "AI code reviews", link: "/ai/code-review" },
              { text: "Example review skill", link: "/ai/example-skill" },
              { text: "For people using AI", link: "/ai/for-people" },
              { text: "For AI agents", link: "/ai/for-agents" },
            ],
          },
        ],
      },
    ],
    search: { provider: "local" },
    socialLinks: [
      { icon: "github", link: "https://github.com/eclipse-energy/.github" },
    ],
    editLink: {
      pattern: "https://github.com/eclipse-energy/.github/edit/main/docs/:path",
      text: "Suggest a change",
    },
  },
});
