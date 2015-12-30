'use strict';

const path = require('path');
// const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    src: './src/index.js',
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

module.exports = {
    entry: PATHS.src,
    output: {
        path: PATHS.build,
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?stage=0',
                exclude: /node_modules/
            }
        ]
    },
    libraryTarget: 'umd',
    devtool: 'inline-source-map',
    devServer: {
    }
};
