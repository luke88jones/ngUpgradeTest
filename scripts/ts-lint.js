"use strict";

var Linter = require("tslint"),
    parseArgs = require("minimist"),
    glob = require("globby"),
    fs = require("fs");

var args = parseArgs(process.argv.slice(2), {
    string: ["f"]
});

function readFileSync(file, options) {
    options = options || {};
    if (typeof options === "string") {
        options = {
            encoding: options
        };
    }

    var shouldThrow = "throws" in options ? options.throws : true;
    var content = fs.readFileSync(file, options);

    try {
        return JSON.parse(content, options.reviver);
    } catch (err) {
        if (shouldThrow) {
            err.message = file + ": " + err.message;
            throw err;
        } else {
            return null;
        }
    }
}

var fileOptions = readFileSync("./tslint.json", "utf8");

var options = {
    configuration: fileOptions,
    formatter: "prose",
    rulesDirectory: null,
    formattersDirectory: null
};

var files = glob.sync(args.f);
files.forEach(function(file) {
    var contents = fs.readFileSync(file, "utf8");

    var ll = new Linter(file, contents, options);
    var results = ll.lint();
    if (results.failureCount) console.log(results.output);
});
