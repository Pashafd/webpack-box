const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Form Validation',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),

    new CleanWebpackPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'dist', 'assets/images'),
        },
      ],
    }),
  ],

  module: {
    rules: [
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      //img
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devtool: 'source-map',
};
