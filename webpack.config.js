const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "./public");

const config = {
  entry: {
    main: "./client/index.js"
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
