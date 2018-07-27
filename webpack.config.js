const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "./build");

const config = {
  entry: {
    main: "./src/client/index.js"
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["react", "es2015"]
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
