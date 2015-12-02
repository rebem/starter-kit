import gulp from 'gulp';

gulp.task('webpack:build', function(done) {
    const gutil = require('gulp-util');
    const webpack = require('webpack');
    const webpackBuildConfig = require('../conf/webpack.build');

    webpack(webpackBuildConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }

        gutil.log('[webpack:build]', stats.toString({
            colors: true,
            children: false,
            assets: false,
            version: false,
            hash: false,
            chunkModules: false
        }));

        done();
    });
});

gulp.task('webpack:dev', function() {
    const gutil = require('gulp-util');
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackDevConfig = require('../conf/webpack.dev');

    const server = new WebpackDevServer(webpack(webpackDevConfig), {
        hot: true,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            chunkModules: false,
            children: false
        }
    });

    server.listen('3000', 'localhost', function(err) {
        if (err) {
            throw new gutil.PluginError('webpack:dev', err);
        }

        gutil.log('[webpack:dev]', 'http://localhost:3000/webpack-dev-server/');
    });
});
