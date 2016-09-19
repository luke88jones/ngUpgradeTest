# Powershell script to download the correct version of the node-sass binary
# see https://github.com/sass/node-sass/issues/1037#issuecomment-122701332

cd node_modules/node-sass

$bin = node -p "process.platform + '-' + process.arch + '-' + process.versions.modules"

# binary matching the value of current OS will be downloaded
node .\scripts\install.js --sass-binary-name $bin
