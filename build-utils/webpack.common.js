const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin');

module.exports = {
    entry: './src/main.js',
    externals: {
      jquery: 'jQuery'
    },
    module: {
        rules: [
          {
            test: /\.html$/,
            exclude: /node_modules/,
            use: ['html-loader']
          },
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              "file-loader",
              {
                loader: "image-webpack-loader",
                options: {
                  bypassOnDebug: true,
                },
              },
            ],
          },
          {
            test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
            loader: "file-loader"
          },
          {
            test: /\.(scss)$/,
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new webpack.IgnorePlugin(/vertx/),
        new GoogleFontsPlugin({
          fonts: [
              { family: "Open Sans" },
              { family: "Montserrat", variants: [ "400", "700italic" ] }
          ]
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
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