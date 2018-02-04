var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssMin = require('gulp-css');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function() {
    gulp.src('./_site/css/main.css')
        .pipe(cssMin())
        .pipe(gulp.dest('./_site/css'));
});

gulp.task('sass', function() {
    gulp.src('./css/main.scss')
        .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
    gulp.src([
        './js/plugins.js',
        './js/index.js'
    ])
        .pipe(uglify())
        .pipe(gulp.dest('./_site/js'))
});

gulp.task('html', function() {
    gulp.src('_site/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('_site'));
})

gulp.task('default', ['sass', 'css', 'scripts', 'html']);