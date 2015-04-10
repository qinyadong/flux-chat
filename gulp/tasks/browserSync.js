var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').browserSync;

gulp.task('browserSync', ['stylus', 'transfer'], function() {
  gulp.start('css', 'js', 'nodemon');
  browserSync.init(config);
});
