"use strict"; 

const helpers = require("./config/helpers");
const webpack = require('webpack');

let config = {  
    entry: {
        "polyfills": helpers.root("/src/polyfills.browser.ts"),
        "ng1": helpers.root("/src/main.ts"),
    },
    output: {
        path: helpers.root("/dist/js"),
        filename: "[name].bundle.js",
        sourceMapFilename: '[name].map'
    },
    modulesDirectories: ['node_modules'],
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                include: [
                    helpers.root("src/main.ts"),
                    helpers.root("src/app"),
                    helpers.root("src/modules"),
                    helpers.root("src/polyfills.browser.ts"),
                ]
            },
            {
                test: /\.html$/,
                loader: "raw-loader",
                exclude: [helpers.root("src/index.html")]
            }
        ],
    },
    plugins: []
};

module.exports = config; 