var compileTypescript = require('threax-gulp-tk/typescript.js');

function compile(rootDir, outDir) {
    console.log("Compiling hr.bootstrap");

    return compileTypescript({
        libs: [
            __dirname + "/dataApi/**/*.ts",
            __dirname + "/lib/**/*.ts",
            __dirname + "/plugin/**/*.ts",
        ],
        runners:[
            'hr.bootstrap.dataapi.affix',
            'hr.bootstrap.dataapi.alert',
            'hr.bootstrap.dataapi.button',
            'hr.bootstrap.dataapi.carousel',
            'hr.bootstrap.dataapi.collapse',
            'hr.bootstrap.dataapi.dropdown',
            'hr.bootstrap.dataapi.modal',
            'hr.bootstrap.dataapi.popover',
            'hr.bootstrap.dataapi.scrollspy',
            'hr.bootstrap.dataapi.tab',
            'hr.bootstrap.dataapi.tooltip',
            'hr.bootstrap.ModalToggle',
        ],
        output: "htmlrapier.bootstrap",
        dest: outDir,
        sourceRoot: __dirname + "/plugin/",
        minify: true,
        concat: true,
        namespace: 'hr.bootstrap'
    });
}
module.exports = compile;