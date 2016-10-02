import { Collapse } from 'hr.bootstrap.collapse-native';

// COLLAPSE DATA API
// =================
var Collapses = document.querySelectorAll('[data-toggle="collapse"]'), i = 0, cll = Collapses.length;
for (i; i < cll; i++) {
    var item = Collapses[i], options: any = {};
    options.duration = item.getAttribute('data-duration');
    new Collapse(item, options);
}