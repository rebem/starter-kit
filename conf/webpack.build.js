import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackCommonConfig from './webpack.common';
import autoprefixerConfig from './autoprefixer';

export default {
    ...webpackCommonConfig,
    entry: {
        vendor: [
            'react',
            '@yummies/dom'
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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?-minimize' +
                    '!autoprefixer?' + autoprefixerConfig +
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
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html',
            assets: {
                vendor: 'js/vendor.js',
                app: 'js/app.js',
                css: 'css/app.css'
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
