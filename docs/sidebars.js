// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  gettingStartedSidebar: [
    {
      type: "autogenerated",
      dirName: "getting-started",
    },
  ],
  guidesSidebar: [
    {
      type: "autogenerated",
      dirName: "guides",
    },
  ],
  referenceSidebar: [
    "reference/index",
    {
      type: "category",
      label: "@auth/core",
      link: {
        type: "doc",
        id: "reference/core/main",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "reference/core",
          // See: https://github.com/facebook/docusaurus/issues/5689
          // exclude: ["index"],
        },
      ],
    },
    {
      type: "category",
      label: "@auth/sveltekit",
      link: { type: "doc", id: "reference/sveltekit/main" },
      items: [{ type: "autogenerated", dirName: "reference/04-sveltekit" }],
    },
    {
      type: "category",
      label: "@auth/solid-start",
      link: {
        type: "doc",
        id: "reference/solidstart/index",
      },
      items: ["reference/solidstart/client", "reference/solidstart/protected"],
    },
    {
      type: "category",
      label: "@auth/nextjs",
      link: {
        type: "doc",
        id: "reference/nextjs/index",
      },
      items: [
        "reference/nextjs/client",
        {
          type: "link",
          label: "NextAuth.js (next-auth)",
          href: "https://next-auth.js.org",
        },
      ],
    },
    {
      type: "category",
      label: "Database Adapters",
      link: { type: "doc", id: "reference/adapters/overview" },
      items: [
        {
          type: "doc",
          id: "reference/adapter/firebase/index",
        },
        {
          type: "autogenerated",
          dirName: "reference/06-adapters",
          // See: https://github.com/facebook/docusaurus/issues/5689
          // exclude: ["index"],
        },
      ],
    },
    {
      type: "category",
      label: "OAuth Providers",
      items: [
        {
          type: "autogenerated",
          dirName: "reference/05-oauth-providers",
          // See: https://github.com/facebook/docusaurus/issues/5689
          // exclude: ["index"],
        },
      ],
    },
    "reference/utilities/client",
    "reference/warnings",
  ],
  conceptsSidebar: [
    {
      type: "autogenerated",
      dirName: "concepts",
    },
  ],
}
