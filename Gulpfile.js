var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');

gulp.task('browserify', function() {
  var b = browserify();
  b.transform(reactify);
  b.add('./client/app.js');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
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
