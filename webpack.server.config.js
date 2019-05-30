const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'css-loader',
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
    },
    {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
    },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.jsx', '.js' ]
},
  externals: [webpackNodeExternals()]
};