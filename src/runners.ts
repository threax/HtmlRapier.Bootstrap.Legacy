declare var jsns;
declare var $;

var bootstrapVersion = $.fn.collapse.Constructor.VERSION;
if (bootstrapVersion === undefined) {
    throw new Error("Cannot detect bootstrap version. Bootstrap plugin will not be available.");
}
var split = bootstrapVersion.split(".");
var version = split[0];
switch(version){
    case '4':
        jsns.run("hr.bootstrap.bootstrap4form");
        break;
}

jsns.run("hr.bootstrap.activate");