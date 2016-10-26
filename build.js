var compileTypescript = require('threax-gulp-tk/typescript.js');

function compile(rootDir, outDir, settings) {
    if(settings === undefined){
        settings = {};
    }

    var concat = true;
    if(settings.concat !== undefined){
        concat = settings.concat;
    }

    var minify = true;
    if(settings.minify !== undefined){
        minify = settings.minify;
    }

    console.log("Compiling hr.bootstrap");

    return compileTypescript({
        libs: [
            __dirname + "/lib/**/*.ts",
        ],
        runners: false,
        output: "HtmlRapierBootstrap",
        dest: outDir,
        sourceRoot: __dirname + "/lib/",
        minify: minify,
        concat: concat,
        namespace: 'hr.bootstrap'
    });
}
module.exports = compile;