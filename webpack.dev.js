const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    devtoolModuleFilenameTemplate: (info) =>
      `webpack:///./${info.resourcePath.replace(/\\/g, "/")}`,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: ["src/**/*.html"],
    port: 3000,
    client: {
      overlay: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
