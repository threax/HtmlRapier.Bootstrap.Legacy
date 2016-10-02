import { Button } from 'hr.bootstrap.button-native';

// BUTTON DATA API
// =================
var Buttons = document.querySelectorAll('[data-toggle=button]'), i = 0, btl = Buttons.length;
for (i; i < btl; i++) {
    new Button(Buttons[i]);
}

var ButtonGroups = document.querySelectorAll('[data-toggle=buttons]'), j = 0, bgl = ButtonGroups.length;
for (j; j < bgl; j++) {
    new Button(ButtonGroups[j]);
}