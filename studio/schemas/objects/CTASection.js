export default {
  name: "CTASection",
  title: "Call To Action Section",
  type: "object",
  fields: [
    {
      name: "item1",
      title: "Left item",
      type: "CTAItem",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "item2",
      title: "Right item",
      type: "CTAItem",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title1: "item1.text",
      title2: "item2.text",
      media: "item1.image",
    },
    prepare({ title1, title2, media }) {
      return {
        title: `${title1}, ${title2}`,
        subtitle: "Call To Action Section",
        media,
      };
    },
  },
};
