var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('minifyJS', function () {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
	gulp.run('minifyJS');
});