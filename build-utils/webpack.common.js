const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [      
      'webpack/hot/only-dev-server',
      'font-awesome/scss/font-awesome.scss',
      './src/index.js'
    ],
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/, 
            use: ['style-loader', 'css-loader', 'postcss-loader']
          },
          {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'url-loader?limit=10000',
          },
          {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            use: 'file-loader',
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              'file-loader?name=images/[name].[ext]',
              'image-webpack-loader?bypassOnDebug'
            ]
          },
          {
            test: /font-awesome\.config\.js/,
            use: [
              { loader: 'style-loader' },
              { loader: 'font-awesome-loader' }
            ]
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === 'development',
                },
              },
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            test: /bootstrap\/dist\/js\/umd\//, 
            use: 'imports-loader?jQuery=jquery'
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Hello Webpack bundled JavaScript Project',
          template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
          Button: 'exports-loader?Button!bootstrap/js/dist/button',
          Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
          Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
          Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
          Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
          Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
          Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
          Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Util: 'exports-loader?Util!bootstrap/js/dist/util'
         })
      ],
    output: {
      path: path.resolve(__dirname, '../', 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        host: "localhost",
        port: 9000,
        proxy: {
            "/oauth": {
                target: "http://localhost:56204",
                secure: false
            },

            "/api": {
                target: "http://localhost:56204",
                secure: false
            }
        }
    }
};