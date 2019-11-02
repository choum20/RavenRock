const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
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
          title: 'Hello Webpack bundled JavaScript Project',
          template: './src/index.html'
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