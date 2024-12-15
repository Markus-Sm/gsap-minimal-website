const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./public/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/assets/favicon/favicon.png"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public/assets",
          to: "assets"
        }
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/"
    },
    hot: true,
    open: true
  },
};
