var gulp = require('gulp');
var mocha = require('gulp-mocha');
var tsb = require('gulp-tsb');
var istanbul = require('gulp-istanbul');
var typedoc = require("gulp-typedoc");
var tslint = require("gulp-tslint");
var args = require('yargs').argv;

// build and run mocha tests in the ./tests folder
gulp.task('buildAndRunTests', ['buildTests'], function () {
    var src = args.src || './tests/**/*.*Tests*.js';

    return gulp.src(src, { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({
            "reporter": "mocha-jenkins-reporter",
            "reporterOptions": {
                "junit_report_name": "Tests",
                "junit_report_path": "test-report.xml",
                "junit_report_stack": 1
            }
        }));
});

// build and run mocha tests with coverage in the ./tests folder
gulp.task('buildAndRunTestsWithCoverage', ['buildTests', 'pre-test'], function () {
    var src = args.src || './tests/**/*.*Tests*.js';

    return gulp.src(src, { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({
            "reporter": "mocha-jenkins-reporter",
            "reporterOptions": {
                "junit_report_name": "Tests",
                "junit_report_path": "test-report.xml",
                "junit_report_stack": 1
            }
        }))
        // Creating the reports after tests ran 
        .pipe(istanbul.writeReports({
            reporters: ['html', 'text', 'text-summary', 'cobertura']
        }))
        // Enforce a coverage of at least 70% 
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 70 } }));
});

// just run mocha tests in the ./tests folder
gulp.task('runTests', function () {
    return gulp.src('./tests/**/*.Tests.js', { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({
            "reporter": "mocha-jenkins-reporter",
            "reporterOptions": {
                "junit_report_name": "Tests",
                "junit_report_path": "test-report.xml",
                "junit_report_stack": 1
            }
        }));
});

// TypeScript build for /src folder, pipes in .d.ts files from typings folder 
var tsConfigSrc = tsb.create('tsconfig.json');
gulp.task('buildSrc', function () {
    return gulp.src(['typings/main/**/*.ts', 'src/**/*.ts'])
        .pipe(tsConfigSrc())
        .pipe(gulp.dest('src'));
});

// TypeScript build for /tests folder, pipes in .d.ts files from typings folder
// as well as the src/tsd.d.ts which is referenced by tests/tsd.d.ts 
var tsConfigTests = tsb.create('tsconfig.json');
gulp.task('buildTests', function () {
    // pipe in all necessary files
    return gulp.src(['typings/main/**/*.ts', 'tests/**/*.ts'])
        .pipe(tsConfigTests())
        .pipe(gulp.dest('tests'));
});

// watch for any TypeScript changes
// if a file change is detected, run the TypeScript gulp tasks
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['buildSrc']);
    gulp.watch('tests/**/*.ts', ['buildTests']);
});

gulp.task('pre-test', function () {
    return gulp.src(['src/*.js', 'src/**/*.js'])
        // Covering files 
        .pipe(istanbul())
        // Force `require` to return covered files 
        .pipe(istanbul.hookRequire());
});

//task for generation of documentation
gulp.task("docuSrc", function () {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(typedoc({
            module: "commonjs",
            target: "es5",
            out: "docs/",
            name: "06 docu"
        }));
});

//standalone ts lint task for command line
gulp.task("tslint", function () {
    gulp.src(["src/**/*.ts"])
        .pipe(tslint())
        .pipe(tslint.report("verbose"));
});

gulp.task('buildAll', ['buildSrc', 'buildTests']);