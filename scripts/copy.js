/* global process */
"use strict";

const cp = require("cp");
const glob = require("glob");

let getDirName = function(relativePath) {
    if (relativePath.indexOf("*") !== -1) {
        return relativePath.substring(0, relativePath.indexOf("*"));
    } 
    return relativePath;
}

let checkTrailingSlash = function(path) {
    return path = (path[path.length - 1] == "/") ? path : path + "/"; 
}

if (process.argv.length !== 4) {
	console.error("A source and destination file is required!");
} else if (process.argv[2].indexOf("*") !== -1) {
    let inputDir = checkTrailingSlash(getDirName(process.argv[2]));
    let outputDir = checkTrailingSlash(getDirName(process.argv[3]));

    glob(process.argv[2], function(err, files) {
        files.forEach(function(file) {
			let fileName = file.substring(file.lastIndexOf("/") + 1);
			let dest = outputDir + fileName;
            cp.sync(file, dest);
        });
    });
} else {
	cp.sync(process.argv[2], process.argv[3]);    
}