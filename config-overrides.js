module.exports = function override(config, env) {
    config.resolve.fallback = {
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify")
    };
    return config;
  }