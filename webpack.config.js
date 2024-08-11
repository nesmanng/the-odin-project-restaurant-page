const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'menu.html',
            template: './src/menu/menu.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'promotions.html',
            template: './src/promotions/promotions.html',
            chunks: ['main']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
};