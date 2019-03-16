const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaders = require('./webpack-loaders');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      ux: path.resolve(__dirname, 'src/app/ux'),
      backend: path.resolve(__dirname, 'backend'),
      static: path.resolve(__dirname, 'public/static')
    }
  },

  module: {
    rules: loaders
  },

  devServer: {
    contentBase: "./public",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:3001"
    }
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
    // new HtmlWebpackPlugin({
    //   filename: './public/index.html',
    //   template: './src/template.html',
    //   files: {
    //     css: ['style.css'],
    //     js: [ "bundle.js"]
    //   }
    // }),
    // new webpack.HotModuleReplacementPlugin(),
  ]
};
