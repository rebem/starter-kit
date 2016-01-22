import { LOG_WARN } from 'karma/lib/constants';

import webpackTestConfig from './webpack.test';

export default {
    port: 3001,
    webpackPort: 3002,
    colors: true,
    basePath: './',
    files: [
        'test/index.js'
    ],
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/index.js': 'webpack'
    },
    // https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'mocha' ],
    webpack: webpackTestConfig,
    webpackMiddleware: {
        noInfo: true,
        quiet: true
    },
    // https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'mocha', 'coverage' ],
    // https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
    coverageReporter: {
        dir: 'coverage/',
        reporters: [
            {
                type: 'html'
            },
            {
                type: 'text-summary'
            },
            {
                type: 'lcovonly', subdir: '.'
            }
        ]
    },
    logLevel: LOG_WARN,
    browsers: [ 'jsdom' ],
    browserNoActivityTimeout: 30000, // default 10 * 1000
    browserDisconnectTimeout: 10000, // default 2 * 1000
    browserDisconnectTolerance: 1 // default 0
};
