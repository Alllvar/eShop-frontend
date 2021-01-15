const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotEnvWebpackPlugin = require('dotenv-webpack');


module.exports = {
    entry: ['react-hot-loader/patch', './src/index.tsx'],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DotEnvWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template: path.resolve(__dirname, './public/index.html'),
        }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.png', '.jpg', '.gif', '.jpeg' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};