const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { resolve } = require('path')

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif|svg|webp)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template:resolve(__dirname, 'index.html')}),
    new MiniCssExtractPlugin({filename:'[name].[contenthash].css'})
  ],
  devServer: {
    port: 5555,
    static: true,
    static: "./build",
  },
}