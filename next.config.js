const path = require("path");
const withSvgr = require("next-plugin-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "vars.scss";`,
  },
};

module.exports = withSvgr({
  ...nextConfig,
  svgrOptions: {
    dimensions: false,
  },
});
