import { ScrollSpy } from 'hr.bootstrap.scrollspy-native';

//SCROLLSPY DATA API
//=============
var scrollSpyes = document.querySelectorAll('[data-spy="scroll"]'), i = 0, ssl = scrollSpyes.length; // mostly is the document.body or a large container with many elements having id="not-null-id"
for (i; i < ssl; i++) {
    var spy = scrollSpyes[i], options: any = {};
    options.target = spy.getAttribute('data-target') || null;  // this must be a .nav component with id="not-null"
    if (options.target !== null) {
        var menu = options.target === 'object' ? options.target : document.querySelector(options.target),
            items = menu.querySelectorAll('a'), j = 0, il = items.length;
        for (j; j < il; j++) {
            var item = items[j];
            if (item.href && item.getAttribute('href') !== '#')
                new ScrollSpy(spy, item, options);
        }
    }
}