import path from 'path';
import webpack from 'webpack';

import webpackCommonConfig from './webpack.common';
import autoprefixerConfig from './autoprefixer';

export default {
    ...webpackCommonConfig,
    entry: [
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        ...webpackCommonConfig.output,
        path: path.resolve('./'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    // devtool: '#cheap-module-eval-source-map',
    module: {
        preLoaders: webpackCommonConfig.module.preLoaders,
        loaders: [
            ...webpackCommonConfig.module.loaders,
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?-minimize',
                    'autoprefixer?' + autoprefixerConfig
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css?-minimize',
                    'autoprefixer?' + autoprefixerConfig,
                    'less'
                ]
            }
        ]
    },
    plugins: [
        ...webpackCommonConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
