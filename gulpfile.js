var gulp   = require('gulp'),
    util   = require('gulp-util'),
    watch  = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    jade   = require('gulp-jade');

gulp.task('jade', function() {
  gulp.src('templates/**/*.jade')
  .pipe(jade({
    pretty: !util.env.production
  }))
  .pipe(gulp.dest('html'));
});

gulp.task('uglify', function() {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('scripts'))
});

gulp.task('coffee', function() {
  gulp.src('coffee/**/*.coffee')
  .pipe(coffee())
  .pipe(uglify())
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('scripts'));
});

gulp.task('concat', function() {
  return gulp.src('scripts/**/*.js')
    .pipe(concat())
    .pipe(gulp.dest('build/app.js'))
});

gulp.task('watch', function() {
  gulp.watch(['templates/**/*.jade'], ['jade']);
  gulp.watch(['coffee/**/*.coffee'], ['coffee']);
});
