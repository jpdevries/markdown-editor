'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('libjs', function () {
        return gulp.src([
                'bower_components/ace-builds/src/ace.js',
                'bower_components/remarkable/dist/remarkable.js',
                'bower_components/ace-builds/src/mode-markdown.js',
                'src/custom_ace/mode-markdowneditor.js',
                'src/custom_ace/gutter_toolbar.js',
                'bower_components/ace-builds/src/ext-language_tools.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/cropper/dist/cropper.min.js',
                'bower_components/diff-dom/diffDOM.js'
            ])
            .pipe(plumber())
            .pipe(concat('dependencies.js'))
            .pipe(gulp.dest('../../assets/components/markdowneditor/js/mgr'));
});

gulp.task('acethemes', function () {
        return gulp.src([
                'bower_components/ace-builds/src/theme-*.js'
            ])
            .pipe(plumber())
            .pipe(concat('acethemes.js'))
            .pipe(gulp.dest('../../assets/components/markdowneditor/js/mgr'));
});

gulp.task('js-highlight', function () {
        return gulp.src([
            'src/vendor/highlight/highlight.pack.js'
            ])
            .pipe(plumber())
            .pipe(concat('highlight.pack.js'))
            .pipe(gulp.dest('../../assets/components/markdowneditor/js'));
});

gulp.task('js', function () {

    return gulp.src(['src/*.js'])
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('../../assets/components/markdowneditor/js/mgr'));
});

gulp.task('js:watch', ['js'], function () {
    gulp.watch('src/*.js', ['js'])
});
