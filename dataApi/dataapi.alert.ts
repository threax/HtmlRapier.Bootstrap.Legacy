import {Alert} from 'hr.bootstrap.alert-native'

// ALERT DATA API
// =================
var Alerts = document.querySelectorAll('[data-dismiss="alert"]'), i = 0, all = Alerts.length;
for (i; i < all; i++) {
    new Alert(Alerts[i]);
}