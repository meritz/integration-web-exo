var gulp        = require('gulp');
var gitignore = require('gulp-gitignore');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.css", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*/*.scss")
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);