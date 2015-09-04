var gulp = require('gulp');
var jade = require('gulp-jade');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var entry = "./src/js/calc.js";

gulp.task('index', function () {
  gulp.src('src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['index'], function (cb) {
  return gulp.src(entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('')); // dest は webpack 側で指定するためここでは指定しない
});

gulp.task('watch', function() {
  gulp.watch(['src/js/*.js'], ['build']);
  // gulp.watch(['src/css/*.css'], ['build']);
  gulp.watch(['src/jade/*.jade'], ['build']);
});

gulp.task('default', ['build', 'watch']);
