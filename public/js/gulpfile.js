var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

gulp.task('js', function () {
  gulp.src(['src/coffee/**/module.coffee', 'src/coffee/**/*.coffee'])
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'))
});

gulp.task('watch', ['js'], function () {
  gulp.watch('src/coffee/**/*.js', ['js'])
})

gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

