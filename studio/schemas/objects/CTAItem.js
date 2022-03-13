export default {
  name: "CTAItem",
  title: "Call To Action Item",
  type: "object",
  fields: [
    {
      name: "text",
      title: "text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    },
    {
      name: "textColor",
      type: "string",
      description: "Color must be in HEX format",
      validation: (Rule) =>
        Rule.regex(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3})$/, {
          name: "Incorrect format",
        }),
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "Color must be in HEX format",
      validation: (Rule) =>
        Rule.regex(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3})$/, {
          name: "Incorrect format",
        }),
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
