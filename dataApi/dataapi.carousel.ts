import { Carousel } from 'hr.bootstrap.carousel-native';

// CAROUSEL DATA API
// =================
var Carousels = document.querySelectorAll('[data-ride="carousel"]'), i = 0, crl = Carousels.length;
for (i; i < crl; i++) {
    var c = Carousels[i], options: any = {};
    options.interval = c.getAttribute('data-interval') && c.getAttribute('data-interval');
    options.pause = c.getAttribute('data-pause') && c.getAttribute('data-pause') || 'hover';
    options.keyboard = c.getAttribute('data-keyboard') && c.getAttribute('data-keyboard') || false;
    options.duration = c.getAttribute('data-duration') && c.getAttribute('data-duration') || false;
    new Carousel(c, options)
}