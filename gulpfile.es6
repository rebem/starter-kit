import gulp from 'gulp';

import './gulp/clean';
import './gulp/webpack';

gulp.task('build', gulp.series('clean:build', 'webpack:build'));
gulp.task('dev', gulp.series('webpack:dev'));

gulp.task('default', gulp.series('dev'));
