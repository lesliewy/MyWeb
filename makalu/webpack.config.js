var path = require('path');
var webpack = require('webpack');
const config = require('./config')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = {
  entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
  output: {
    path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
    publicPath: '/dist/', // 通过devServer访问路径
    filename: 'build.js' // 打包后的文件名
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
  devServer: {
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    historyApiFallback: true,
    overlay: true,
    proxy: config.dev.proxyTable
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      }
    ]
  }
};
