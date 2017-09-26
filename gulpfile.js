var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["run"]);

gulp.task("run", shell.task('npm update @kevmch/oop && node main.js'));
