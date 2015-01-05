'use strict';
console.log('Gulp started: ', Date());
var gulp = require('gulp');
var componentHelper = require('../index.js')(gulp);
var paths = componentHelper.paths;
var runSequence = require('run-sequence');
var del = require('del');
var karma = require('karma').server;

gulp.task('test:clean', ['clean'], function(cb){
    return del([
        './bower_components',
        './test',
        './demo',
        './src',
        './*.md',
        './.gitignore',
        './*.gitignore',
        './bower.json'
    ], cb);
});



/*
 * MOCK TASKS
 * We dont want to actually run any commit commands when testing!
 */
gulp.task('pre-build', function(cb){
    console.log('test setting pre-build works!');
    return cb();
});

gulp.task('release:gh-pages', function (cb) {
    console.log('in "mock" gh-pages');
    return cb();
});

gulp.task('git-tag', function(cb) {
    console.log('in "mock" git-tag');
    return cb();
});

gulp.task('git-commit-push', function(cb){
    console.log('in "mock" git-commit-push');
    return cb();
});

gulp.task('init:gh-pages', function(cb) {
    console.log('in "mock" initGHPages');
    return cb();
});

gulp.task('init:master', function(cb) {
    console.log('in "mock" initMaster');
    return cb();
});

gulp.task('init:bower', function(cb) {
    console.log('in "mock" init:bower');
    return cb();
});

gulp.task('release:aws', function(cb) {
    console.log('in "mock" release:aws');
    return cb();
});



/* SORT OUT TEST CONFIG */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/test/karma.conf.js',
        singleRun: true
    }, done);
});
gulp.task('test:tdd', function (done) {
    karma.start({
        configFile: __dirname + '/test/karma.conf.js'
    }, done);
});
