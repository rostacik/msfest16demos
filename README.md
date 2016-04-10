# MS fest 2016 TypeScript demos
my TypeScript demos for MS Fest 2016 in Bratislava

slides can be found here : [http://bit.ly/1VdDgLH](http://bit.ly/1VdDgLH "http://bit.ly/1VdDgLH")


# 01msFestVSSimple

Basic demo of simple TS project + jQuery + jQuery definition for full VS



# 02msFestVSLatestTS

Sample app with Microsoft.TypeScript.MSBuild package for building with latest TS version, with jQuery and jQuery typings. tsconfig.json for TypeScript configuration.


# 03msFestVSNodeJSTS

Sample app for full VS with gulp tasks to build async code in TypeScript with pure TypeScript compilation, or with TypeScript + Babel.

Mocha unit tests can be run with Chutzpah directly from VS.


# 04msFestVSCodeSimple

VS Code project, built in task manager that runs tsc directly, typings npm package for managing d.ts files.


# 05msFestVSCodeLatestTS

VS Code project with nightly TypeScript local npm package for building, built in task manager for calling tsc npm package.


# 06msFestVSCodeWithTools

Gulp as task manager, dedicated `buildSrc` for building TypeScript files in src folder. Task `buildTests` for building just tests. Task `buildAndRunTestsWithCoverage` for building tests with code coverage and with output to XML files for Visual Studio Team Services to pick it up.


# 07msFestVSCodeWebPack

Sample VS Code project with sample [webpack](https://webpack.github.io/ "webpack") setup.


# 08msFestVSCodeClassDemo

Sample VS Code project for demonstration how TypeScript transpiles classes and derived classes to ES2015 and to ES5 (you have to change target in tsconfig.json file).


# 09msFestVSCodeSalsaDemo

Sample VS Code project with samples to show Salsa in both .ts and .js files.