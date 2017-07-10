var io = require('threax-npm-tk/io');

(async function(){

    var jquery = await io.readFile("../node_modules/jquery/dist/jquery.js");
    jquery = jquery.toString('utf8');

    var bootstrap = await io.readFile("../node_modules/bootstrap/dist/js/bootstrap.js");
    bootstrap = bootstrap.toString('utf8');

    var content = 'jsns.define("hr.bootstrap", [], function(module, exports){\nvar define = function(name, deps, fac){fac(exports);};\ndefine.amd = true;\nvar global = module;\n' + jquery + '\n\n' + bootstrap + '\n});';

    await io.writeFile(__dirname + "/../hr.bootstrap.js", content);
})();