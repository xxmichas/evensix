export default {
  name: "navLink",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    },
  ],
  preview: {
    select: {
      title: "name",
      link: "link",
    },
    prepare({ title, link }) {
      return {
        title,
        subtitle: link,
      };
    },
  },
};
