/* global process */
var exec = require('child_process').exec;
var isWin = /^win/.test(process.platform);
if (isWin) {
    exec("powershell.exe scripts/update-node-sass.ps1", function(error, stdout, stderr) {
        // console.log("stdout: " + stdout);
        // console.log("stderr: " + stderr);
        if (error !== null) {
            console.log("exec error: " + error);
        }
    });
}
