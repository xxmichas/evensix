export default {
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    {
      name: "text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    },
    {
      name: "type",
      type: "string",
      options: {
        list: ["basic", "solid", "outline"],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
