export default {
  name: "contentSectionText",
  title: "Content section - Text",
  type: "object",
  fields: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "textLeft",
      title: "Text on the left",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "textRight",
      title: "Text on the right",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Content section - Text",
      };
    },
  },
};
