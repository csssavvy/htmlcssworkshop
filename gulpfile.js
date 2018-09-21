var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('cssnano');
var precss = require('precss');

const style = {
    src: './src/scss/**/*.scss',
    dest: './dist/css'
}

gulp.task('styling', () => {
    // const plugins = [
    //     precss(),
    //     autoprefixer({browsers: ['last 1 version']}),
    //     cssnano()
    // ]
    // return gulp.src(style.src)
    //     .pipe(sourcemaps.init())
    //     .pipe(postcss(plugins))
    //     .pipe(sourcemaps.write('.'))
    //     .pipe(gulp.dest(style.dest));
    return gulp.src(style.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(style.dest))
})

gulp.task('styling:watch', () => {
    gulp.watch(style.src, ['styling'])
})

gulp.task('default', ['styling', 'styling:watch']);