export default {
  name: "contentSectionCards",
  title: "Content section - Cards",
  type: "object",
  fields: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "cards",
      type: "array",
      of: [{ type: "card" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "cards[0].image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Content section - Cards",
        media,
      };
    },
  },
};
