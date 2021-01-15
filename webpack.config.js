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
