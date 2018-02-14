const path = require('path');
const webpack = require('webpack');
const vueConfig = require('./vue-loader.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const resolve = (file => path.resolve(__dirname, file));

module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: {
    path: resolve('../public'),
    publicPath: '/public/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue', '.gql'],
    alias: {
      assets: resolve('../assets'),
      components: resolve('../components'),
      layouts: resolve('../layouts'),
      graphquery: resolve('../graphquery'),
      helper: resolve('../helper'),
      mixins: resolve('../mixins'),
      pages: resolve('../pages'),
      public: resolve('../public'),
      router: resolve('../router'),
      static: resolve('../static'),
      store: resolve('../store'),
      vue$: 'vue/dist/vue.common.js',
    },
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.styl$/,
        loader: ['vue-style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false,
  },
  plugins: isProd
    ? [
      new UglifyJSPlugin(),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].css',
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
      }),
      new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
    ]
    : [
      new FriendlyErrorsPlugin(),
      new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
    ],
};
