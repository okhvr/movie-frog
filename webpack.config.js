const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "/",
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    isDevelopment ?
                    'style-loader' :
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: './dist',
                        },
                      },
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    resolve: {
        extensions: [ '.jsx', '.js' ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: 'style.css'}),
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: 'src/favicon.ico'
        })
    ]
};
