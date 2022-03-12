export default {
  name: "card",
  type: "object",
  fields: [
    {
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "button",
      title: "Button",
      type: "button",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "Color must be in HEX format",
      validation: (Rule) => [
        Rule.regex(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3})$/, {
          name: "Incorrect format",
        }),
      ],
    },
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
};
