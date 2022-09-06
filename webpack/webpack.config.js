const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const webpack = require('webpack');

const { resolve } = require('path')

module.exports = {
  entry: {
    app: './index.js',
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.[contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/images/[name][ext][query]'
  },

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 5555,
    static: "./build",
    hot: true
  },
  resolve: {
    extensions: ['.ts', ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: 'asset/inline',
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
    new Analyzer(),
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin({
      filename: "compressed/[base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|svg|jpe?g|png|webp)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],

  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        test: /\.(jpe?g\|png\|webp\|svg)\$/i,
        loader: false,
        minimizer: {
          filename: "imagemin/optimized-[name][ext]",
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ['webp', { optimizationLevel: 8 }]
            ],
          },
        },
      }),
    ],
  },
}
