const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "helpers"),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [{
      test: /\.handlebars$/,
      use: {
        loader: 'handlebars-loader',
        options: {
          helperDirs: [path.resolve(__dirname, './helpers')]
        }
      }
    }, {
      test: /\.css$/,
      use: ExtractTextWebpackPlugin.extract({
        use: ['css-loader'],
        fallback: 'style-loader'
      })
    }]
  },
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')], {
      root: path.resolve(__dirname, '')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new ExtractTextWebpackPlugin({
      filename: '[hash][name].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin({
      port: 3000
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery' //,
        //handlebars: 'handlebars'
    })
  ],
  node: {
    fs: 'empty'
  }
};
