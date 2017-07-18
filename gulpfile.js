const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('build', function () {
  return gulp.src([
    'src/swi.js'
  ])
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});

gulp.task('default', [ 'build' ]);
