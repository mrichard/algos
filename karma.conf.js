module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha', 'chai-sinon'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots', 'coverage'],
        coverageReporter: {
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    dir: 'meta/coverage'
                }
            ]
        },
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-coverage'),
            require('karma-mocha'),
            require('karma-sourcemap-loader'),
            require('karma-phantomjs-launcher'),
            require('karma-chai-sinon'),
            require('karma-webpack')
        ],
        webpack: {
            devtool: 'inline-source-map',
            node: {
                fs: 'empty'
            },
            module: {
                postLoaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|__tests|tests.webpack.js|karma.conf.js|webpack.config.js)/,
                        loader: 'isparta'
                    }
                ],
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel?stage=0'
                    }
                ]
            }
        },
        webpackServer: {
        }
    });
};
