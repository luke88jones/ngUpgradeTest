"use strict";
const webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "bower_components/jquery/dist/jquery.js",
            "bower_components/angular/angular.js",
            "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "bower_components/lodash/dist/lodash.js",
            "bower_components/postal.js/lib/postal.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "bower_components/jasmine-jquery/lib/jasmine-jquery.js",
            "src/main.ts",
            "src/**/*.spec.ts"
        ],
        preprocessors: {
            'src/main.ts': ['webpack'],
            'src/**/*.spec.ts': ['webpack']
        },
        webpack: webpackConfig,
        plugins: [
            require("karma-webpack"),
            require("karma-typescript-preprocessor"),
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-mocha-reporter")
        ],
        reporters: ["mocha"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        customLaunchers: {
            "Chrome_custom": {
                base: "Chrome",
                flags: ["--remote-debugging-port=9222"]
            }
        },
        browsers: ["Chrome_custom"],
        singleRun: false
    });
};