import { Popover } from 'hr.bootstrap.popover-native';

// POPOVER DATA API
// =================
var Popovers = document.querySelectorAll('[data-toggle=popover]'), i = 0, ppl = Popovers.length;
for (i; i < ppl; i++) {
    var item = Popovers[i], options: any = {};
    options.trigger = item.getAttribute('data-trigger'); // click / hover / focus
    options.animation = item.getAttribute('data-animation'); // true / false
    options.duration = item.getAttribute('data-duration');
    options.placement = item.getAttribute('data-placement');
    options.dismiss = item.getAttribute('data-dismiss');
    options.delay = item.getAttribute('data-delay');
    new Popover(item, options);
}