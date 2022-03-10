const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withSvgr(nextConfig);
