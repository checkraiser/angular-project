var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var haml = require('gulp-haml');


gulp.task('coffee', function () {
  gulp.src(['src/coffee/**/app.coffee', 'src/coffee/**/*.coffee'])
    .pipe(coffee({bare: true}))
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
});


gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('haml', function(){
  gulp.src('src/haml/app.haml')
    .pipe(haml())
    .pipe(gulp.dest('public'));
  gulp.src('src/haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('public/templates'));
})

gulp.task('default', ['coffee', 'sass', 'haml'], function () {
  gulp.watch('src/coffee/**/*.coffee', ['coffee']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/haml/**/*.haml', ['haml']);
})
