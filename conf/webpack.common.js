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
    resolve: {
        alias: {
            '~': path.resolve('src/')
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: '@yummies/layers-loader',
                query: {
                    layers: [
                        require('@yummies/core-components'),
                        require('@yummies/theme-reset'),
                        {
                            path: path.resolve('src/components/'),
                            files: {
                                main: 'index.js',
                                styles: 'styles.less'
                            }
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
