const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] }
          }
        ]
      }
    ]
  },
  plugins: [new copyWebpackPlugin(["index.html"])],
  devServer: {
    contentBase: "./dist",
    port: 3000
  }
};
