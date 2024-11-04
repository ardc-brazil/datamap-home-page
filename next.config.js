// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
  env: {
    NEXT_PUBLIC_DATAMAP_BASE_URL: process.env.NEXT_PUBLIC_DATAMAP_BASE_URL,
  },
};
