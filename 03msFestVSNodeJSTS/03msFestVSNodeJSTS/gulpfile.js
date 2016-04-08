/// <binding />
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');

var tsProject = ts.createProject('tsconfig.json');

//full transcompile from TS then Babel to ES5
gulp.task('compile-ts-babel', function () {
    return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('Scripts/ts'));
});

//pure TS task
gulp.task('compile-ts', function () {
    return tsProject.src('scripts/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('Scripts/ts'));
});