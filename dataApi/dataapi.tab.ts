import { Tab } from 'hr.bootstrap.tab-native';

// TAB DATA API
// =================
var Tabs = document.querySelectorAll("[data-toggle='tab'], [data-toggle='pill']"), tbl = Tabs.length, i = 0;
for (i; i < tbl; i++) {
    var tab = Tabs[i], options: any = {};
    options.duration = tab.getAttribute('data-duration') && tab.getAttribute('data-duration') || false;
    new Tab(tab, options);
}