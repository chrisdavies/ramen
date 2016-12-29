'use strict';

const path = require('path');

module.exports = {
  entry: ['./src/main.js'],
  devtool: 'source-map',
  output: {
    filename: './dist/ramen.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      }
    ]
  },
};
