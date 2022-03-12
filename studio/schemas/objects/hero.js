export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "button",
      title: "Button",
      type: "button",
      validation: (Rule) => Rule.required(),
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
