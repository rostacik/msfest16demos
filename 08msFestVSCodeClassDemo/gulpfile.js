var gulp = require('gulp');
var tsb = require('gulp-tsb');

// TypeScript build for /src folder, pipes in .d.ts files from typings folder 
var tsConfigSrc = tsb.create('tsconfig.json');
gulp.task('buildSrc', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tsConfigSrc())
        .pipe(gulp.dest('src'));
});


// watch for any TypeScript changes
// if a file change is detected, run the TypeScript gulp tasks
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['buildSrc']);
});