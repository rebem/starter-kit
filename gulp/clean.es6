import gulp from 'gulp';

gulp.task('clean:build', function(callback) {
    const del = require('del');

    del([ 'build/' ], callback);
});
