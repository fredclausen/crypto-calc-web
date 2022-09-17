const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { node } = require("webpack");

let config = {
  entry: {
    server: path.resolve(__dirname, "src") + "/server.ts",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|\.d\.ts$/,
      },
    ],
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },

  plugins: [new NodePolyfillPlugin()],
};

module.exports = (_, argv) => {
  return config;
};
