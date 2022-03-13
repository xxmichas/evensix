export default {
  name: "landingPage",
  title: "Landing page",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "pageTitle",
      type: "string",
    },
    {
      name: "themeColor",
      description: "URL bar color in HEX format on mobile devices",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3})$/, {
          name: "Incorrect format",
        }),
    },
    {
      name: "navBuilder",
      title: "Navigation links",
      type: "array",
      of: [{ type: "navLink" }],
    },
    {
      name: "pageBuilder",
      title: "Page sections",
      type: "array",
      of: [
        { type: "hero" },
        { type: "contentSectionCards" },
        { type: "contentSectionText" },
        { type: "contentSectionImage" },
        { type: "CTASection" },
      ],
    },
  ],
};
