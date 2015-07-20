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
        extensions: [ '', '.js', '.es6', '.json' ]
    },
    module: {
        preLoaders: [
            {
                test: /\.es6$/,
                loader: 'babel'
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
