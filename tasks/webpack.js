const statsOptions = {
    colors: true,
    children: false,
    assets: false,
    version: false,
    hash: false,
    chunkModules: false
};

export function webpackDev() {
    process.env.NODE_ENV = 'development';

    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const clientOnlyDevConfig = require('../conf/webpack.dev');

    return new Promise((resolve, reject) => {
        const server = new WebpackDevServer(webpack(clientOnlyDevConfig), {
            hot: true,
            stats: statsOptions
        });

        server.listen('3000', err => {
            if (err) {
                return reject(err);
            }

            resolve('http://localhost:3000/webpack-dev-server/');
        });
    });
}

export function webpackBuild() {
    process.env.NODE_ENV = 'production';

    const webpack = require('webpack');
    const isomorphicBuildServerConfig = require('../conf/webpack.build');

    return new Promise((resolve, reject) => {
        webpack(isomorphicBuildServerConfig, (err, stats) => {
            if (err) {
                return reject(err);
            }

            resolve(stats.toString(statsOptions));
        });
    });
}
