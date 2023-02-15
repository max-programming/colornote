const { withSwrApiEndpoints } = require('@next-fetch/swr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withSwrApiEndpoints(nextConfig);
