import path from 'path';
import webpack from 'webpack';

export default {
    cache: true,
    stats: {
        colors: true,
        reasons: false
    },
    output: {
        pathinfo: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: '@yummies/layers-loader',
                query: {
                    layers: [
                        {
                            module: require('@yummies/core-components')
                        },
                        {
                            module: require('@yummies/theme-reset')
                        },
                        {
                            module: require('../src/yummies')
                        }
                    ],
                    include: [
                        path.resolve('src/index')
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('node_modules/')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
