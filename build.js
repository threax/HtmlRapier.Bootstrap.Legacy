﻿var compileTypescript = require('threax-gulp-tk/typescript.js');

function compile(rootDir, outDir) {
    console.log("Compiling hr.bootstrap");

    return compileTypescript({
        libs: [
            __dirname + "/lib/**/*.ts",
        ],
        output: "htmlrapier.bootstrap",
        dest: outDir,
        sourceRoot: __dirname + "/lib/",
        minify: true,
        concat: true,
        namespace: 'hr.bootstrap'
    });
}
module.exports = compile;