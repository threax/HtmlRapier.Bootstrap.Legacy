import { Tooltip } from 'hr.bootstrap.tooltip-native';

// TOOLTIP DATA API
// =================
var Tooltips = document.querySelectorAll('[data-toggle=tooltip]'), i = 0, tpl = Tooltips.length;
for (i; i < tpl; i++) {
    var item = Tooltips[i], options: any = {};
    options.animation = item.getAttribute('data-animation');
    options.placement = item.getAttribute('data-placement');
    options.duration = item.getAttribute('data-duration');
    options.delay = item.getAttribute('data-delay');
    new Tooltip(item, options);
}