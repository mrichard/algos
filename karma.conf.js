module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha', 'chai-sinon'],
        files: [
            'node_modules/babel-core/browser-polyfill.js',
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots', 'notify', 'coverage'],
        coverageReporter: {
            dir: 'meta/coverage',
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    subdir: 'html'
                },
                {
                    type: 'lcov',
                    subdir: 'lcov'
                }
            ]
        },
        notifyReporter: {
            reportEachFailure: true
        },
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-coverage'),
            require('karma-mocha'),
            require('karma-sourcemap-loader'),
            require('karma-notify-reporter'),
            require('karma-phantomjs-launcher'),
            require('karma-chai-sinon'),
            require('karma-webpack')
        ],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                preLoaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|__tests|tests.webpack.js|karma.conf.js|webpack.config.js)/,
                        loader: 'isparta-instrumenter-loader'
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|build)/,
                        loaders: ['eslint', 'jscs']
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
        webpackMiddleware: {
            noInfo: true
        }
    });
};
