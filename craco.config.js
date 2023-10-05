const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
      };

      webpackConfig.resolve.fallback = { "stream": false, "http": false };

      return webpackConfig;
    },
  },
};
