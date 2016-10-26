"use strict";

var gulp = require("gulp");
var build = require('./build');

gulp.task("default", function () {
    return build(__dirname, __dirname + "/dist");
});

gulp.task("debug", function () {
    var settings = {
        minify: false,
    };

    return build(__dirname, __dirname + "/dist", settings);
});