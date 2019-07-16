const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/js/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    overlay: true,
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: {
      index: 'popup.html',
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebPlugin({
      template: './src/index.html',
      filename: 'popup.html',
    }),
  ],
};
