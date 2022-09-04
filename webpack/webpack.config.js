const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { resolve } = require('path')

module.exports = {
  entry: {
    app: './index.js',
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', ".js"],
  },

  output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.[contenthash].js',
    clean: true
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
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new Analyzer()
  ],

  devServer: {
    port: 5555,
    static: "./build",
    hot:true
  },
}
