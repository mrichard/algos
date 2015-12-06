'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    src: './src',
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: PATHS.src,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.src
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Boilerplate React and Webpack'
        })
    ],
    libraryTarget: 'umd'
};

// merge based on lifecycle
if (TARGET === 'start' || !TARGET) {

    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
