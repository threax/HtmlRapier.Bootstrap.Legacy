import { Modal } from 'hr.bootstrap.modal-native';

// DATA API
var Modals = document.querySelectorAll('.modal'), mdl = Modals.length, i = 0;
for (i; i < mdl; i++) {
    var modal = Modals[i], options: any = {};
    options.keyboard = modal.getAttribute('data-keyboard');
    options.backdrop = modal.getAttribute('data-backdrop');
    options.duration = modal.getAttribute('data-duration');
    new Modal(modal, options)
}