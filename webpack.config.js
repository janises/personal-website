var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
      rules: [
          { 
              test: /\.jsx?$/, 
              use: 'babel-loader',
              exclude: /node_modules/
          },
          { 
              test: /\.css$/, 
              use: ['style-loader', 'css-loader'] 
          },
          {
            test: /\.(png|jpg)$/i,
            loader: 'url-loader'
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          }
      ]
  },
  mode: 'development',
  plugins: [
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      })
  ]
}
