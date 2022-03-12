export default {
  name: "heroItem",
  title: "Hero item",
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
    {
      name: "hoverText",
      type: "string",
    },
    {
      name: "hoverDescription",
      type: "string",
    },
  ],
};
