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
                include: [
                    path.resolve('src/'),
                    path.resolve('node_modules/@yummies/core-components/')
                ],
                exclude: [
                    path.resolve('node_modules/@yummies/core-components/node_modules/')
                ],
                loaders: [
                    '@yummies/inheritance-loader',
                    'babel?cacheDirectory'
                ]
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
