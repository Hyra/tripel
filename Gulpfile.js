'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var refresh = require('gulp-livereload');

// Serve task
gulp.task('serve', function() {
  nodemon({ script: 'server.js', ext: 'json js', ignore: ['dist/*', 'client/*'] })
  .on('change', [])
  .on('restart', function() {
    console.log('Restarted webserver');
  });
});

// Browserify task
gulp.task('browserify', function() {
  var b = browserify();
  b.transform({es6: true}, reactify);
  b.add('./client/main.js');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});

// JSHint task
gulp.task('lint', function() {
  return;
  gulp.src('client/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Styles task
gulp.task('styles', function() {
  gulp.src('./client/styles/*.scss')
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  .pipe(sass({onError: function(e) { console.log(e); } }))
  // Optionally add autoprefixer
  .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
  // These last two should look familiar now :)
  .pipe(gulp.dest('./dist/css/'));
});

// Views task
gulp.task('views', function() {
  // Get our index.html
  gulp.src('./client/index.html')
  // And put it in the public folder
  .pipe(gulp.dest('./dist/'));
});

// Watch task
gulp.task('watch', function() {
  refresh.listen();

  // Javascript files
  gulp.watch(['client/*.js', 'client/**/*.js'], ['lint', 'browserify']);

  // SASS files
  gulp.watch(['client/styles/**/*.scss'], ['styles']);

  // HTML files
  gulp.watch(['client/**/*.html'], ['views']);

  // Watch for files to refresh
  gulp.watch('./dist/**').on('change', refresh.changed);
});

// Build task
gulp.task('build', ['views', 'styles', 'browserify', 'watch', 'serve']);

// Default task
gulp.task('default', ['build', 'watch', 'serve']);
