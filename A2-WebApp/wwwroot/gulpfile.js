/// <binding AfterBuild='tsc-compile' ProjectOpened='watch-ts' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourceMaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var tsProject = ts.createProject('wwwroot/tsconfig.json');


gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('tsc-compile', function () {
	return tsProject.src()
		.pipe(sourceMaps.init())
		.pipe(tsProject())
		.js
		.pipe(sourceMaps.write())
		.pipe(gulp.dest("wwwroot/app"))
	;
});

gulp.task('watch-ts', function () {
	return watch('wwwroot/app/**/*.ts', ['tsc-compile']);
});