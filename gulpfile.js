var gulp   = require('gulp'),
    util   = require('gulp-util'),
    watch  = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    jade   = require('gulp-jade');

gulp.task('jade', function() {
  gulp.src('src/assets/templates/layout/pages/*.jade')
  .pipe(jade({
    pretty: !util.env.production
  }))
  .pipe(gulp.dest('build'));
});

gulp.task('coffee', function() {
  gulp.src('src/assets/coffee/**/*.coffee')
  .pipe(coffee({bare: true}))
  // .pipe(uglify())
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('build/assets/js'));
});


gulp.task('watch', function() {
  gulp.watch(['src/assets/templates/layout/**/*.jade'], ['jade']);
  gulp.watch(['src/assets/coffee/**/*.coffee'], ['coffee']);
});
