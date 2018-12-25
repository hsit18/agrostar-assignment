const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 8001;
const productionEnv = process.env.NODE_ENV === 'production';

module.exports = {
    mode: 'development',
    devtool: productionEnv ? 'source-map' : 'cheap-module-source-map',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        host: '0.0.0.0',
        port: PORT,
        contentBase: path.join(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            App: path.resolve(__dirname, 'src/'),
        },
        extensions: ['.js', '.jsx', '.md', '.scss', '.less'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ],

};