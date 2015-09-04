var gulp = require('gulp');
var jade = require('gulp-jade');
var webpack = require('webpack-stream');
var del = require('del');
var webpackConfig = require('./webpack.config.js');
var entry = "./src/js/calc.js";

gulp.task('clean', function () {
  return del(['dist/**/*']);
});

gulp.task('index', ['clean'], function () {
  gulp.src('src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('webpack', ['index'], function () {
  return gulp.src(entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('')); // dest は webpack 側で指定するためここでは指定しない
});

gulp.task('watch', function() {
  gulp.watch(['src/js/*.js'], ['webpack']);
  // gulp.watch(['src/css/*.css'], ['webpack']);
  gulp.watch(['src/jade/*.jade'], ['webpack']);
});

gulp.task('default', ['webpack', 'watch']);
