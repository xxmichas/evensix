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
      name: "navBuilder",
      title: "Navigation links",
      type: "array",
      of: [{ type: "navLink" }],
    },
    {
      name: "pageBuilder",
      title: "Page sections",
      type: "array",
      of: [{ type: "hero" }],
    },
  ],
};
