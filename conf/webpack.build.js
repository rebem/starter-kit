import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import webpackCommonConfig from './webpack.common';

export default {
    ...webpackCommonConfig,
    entry: {
        vendor: [
            'react',
            'react-dom',
            'rebem',
            'rebem-core-components',
            'rebem-theme-reset'
        ],
        app: './src/index'
    },
    output: {
        path: path.resolve('./build/'),
        filename: 'js/[name].js'
    },
    module: {
        preLoaders: webpackCommonConfig.module.preLoaders,
        loaders: [
            ...webpackCommonConfig.module.loaders,
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?-minimize' +
                    '!postcss'
                )
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?-minimize' +
                    '!postcss' +
                    '!less'
                )
            }
        ]
    },
    plugins: [
        ...webpackCommonConfig.plugins,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/[name].js'),
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
