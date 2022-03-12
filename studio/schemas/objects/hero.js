export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
    },
    {
      name: "button",
      title: "Button",
      type: "button",
    },
    {
      name: "images",
      type: "array",
      of: [{ type: "heroItem" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "images[0].image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero section",
        media,
      };
    },
  },
};
