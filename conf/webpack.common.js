import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

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
                loader: 'rebem-layers',
                query: {
                    layers: [
                        require('rebem-core-components'),
                        require('rebem-theme-reset'),
                        require('../src/theme-bootstrap'),
                        {
                            path: path.resolve('src/components/'),
                            files: {
                                main: 'index.js',
                                styles: 'styles.less'
                            }
                        }
                    ],
                    consumers: [
                        path.resolve('src/index')
                    ],
                    importFactory: false
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
    postcss() {
        return [
            autoprefixer({
                browsers: [
                    'last 2 Chrome versions',
                    'last 2 Firefox versions',
                    'last 2 Safari versions',
                    'last 2 Explorer versions'
                ]
            })
        ];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html'
        })
    ]
};
