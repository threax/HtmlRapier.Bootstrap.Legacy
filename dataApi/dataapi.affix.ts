import {Affix} from 'hr.bootstrap.affix-native'

// AFFIX DATA API
// =================
var Affixes = document.querySelectorAll('[data-spy="affix"]'), i = 0, afl = Affixes.length;
for (i; i < afl; i++) {
    var item = Affixes[i], options: any = {};
    options.offsetTop = item.getAttribute('data-offset-top');
    options.offsetBottom = item.getAttribute('data-offset-bottom');
    options.target = item.getAttribute('data-target');

    if (item && (options.offsetTop !== null || options.offsetBottom !== null || options.target !== null)) { //don't do anything unless we have something valid to pin
        new Affix(item, options);
    }
}