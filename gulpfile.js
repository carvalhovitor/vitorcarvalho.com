"use strict";

const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssMin = require('gulp-css'),
    // sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin');

const site = './_site/';

gulp.task('css', () => {
    gulp.src([
           site + 'css/main.css'
        ])
        // .pipe(concat('main.css'))
        // .pipe(sass())
        .pipe(cssMin())
        .pipe(gulp.dest(site + 'css'));
});

gulp.task('scripts', () => {
    gulp.src([
        site + 'js/index.js'
    ])
        .pipe(uglify())
        .pipe(gulp.dest(site + 'js'))
});

gulp.task('html', () => {
    gulp.src('./_site/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./_site/'));
})

gulp.task('default', ['css', 'scripts', 'html']);