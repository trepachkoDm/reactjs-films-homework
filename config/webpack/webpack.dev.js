const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/index.jsx',
    ],
  },
  output: {
    path: path.join(__dirname, '../../build'),
    publicPath: '/',
    filename: '[name].js',
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],
});
