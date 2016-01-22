import path from 'path';

import webpackCommonConfig from './webpack.common';

const testingSources = [
    path.resolve('src/components/')
];

export default {
    ...webpackCommonConfig,
    resolve: {
        ...webpackCommonConfig.resolve,
        alias: {
            ...webpackCommonConfig.resolve.alias,
            test: path.resolve('test')
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'rebem-layers',
                query: {
                    layers: [
                        require('rebem-core-components'),
                        require('rebem-theme-reset'),
                        {
                            path: path.resolve('src/components/'),
                            files: {
                                main: 'index.js',
                                styles: 'styles.less'
                            }
                        }
                    ],
                    include: [
                        path.resolve('src/index.js'),
                        path.resolve('test/')
                    ]
                }
            },
            {
                test: /\.js$/,
                include: testingSources,
                loader: 'babel-istanbul',
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.js$/,
                exclude: [
                    ...testingSources,
                    path.resolve('node_modules/')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }
        ],
        loaders: [
            ...webpackCommonConfig.module.loaders,
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?-minimize',
                    'postcss'
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css?-minimize',
                    'postcss',
                    'less'
                ]
            }
        ]
    }
};
