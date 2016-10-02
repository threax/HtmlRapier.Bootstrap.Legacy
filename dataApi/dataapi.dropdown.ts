import { Dropdown } from 'hr.bootstrap.dropdown-native';

// DROPDOWN DATA API
// =================
var Dropdowns = document.querySelectorAll('[data-toggle=dropdown]'), i = 0, ddl = Dropdowns.length;
for (i; i < ddl; i++) {
    new Dropdown(Dropdowns[i]);
}