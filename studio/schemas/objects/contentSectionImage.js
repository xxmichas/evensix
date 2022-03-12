export default {
  name: "contentSectionImage",
  title: "Content section - Image",
  type: "object",
  fields: [
    {
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Content section - Image",
        media,
      };
    },
  },
};
