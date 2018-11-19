const fs = require("fs");

const package = require("../package.json");

const manifestPath = "src/manifest.json";
const options = {encoding: "utf8"};

let manifest = fs.readFileSync(manifestPath, options);

manifest = manifest.replace(
  /"version": "[\d.]+"/,
  `"version": "${package.version}"`
);

fs.writeFileSync(manifestPath, manifest, options);
