var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('browserify', function() {
  var b = browserify();
  b.transform(reactify);
  b.add('./client/app.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});
