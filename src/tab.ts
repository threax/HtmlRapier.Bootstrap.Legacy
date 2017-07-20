import "hr.bootstrap";
import * as toggles from 'hr.toggles';
import * as events from 'hr.eventdispatcher';

declare var $; //Using global jquery

//Toggle Plugin
class TabStates extends toggles.ToggleStates {
    private tab;

    constructor(element, next: toggles.IToggleStates) {
        super(next);
        this.tab = $(element);

        this.tab.on('shown.bs.tab', (e) => {
            this.fireStateChange('on');
        });
        this.tab.on('hide.bs.tab', (e) => {
            this.fireStateChange('off');
        });
        this.addState('on', 'on');
        this.addState('off', 'off');
    }

    public activateState(state): boolean {
        switch (state) {
            case 'on':
                this.tab.tab('show');
                break;
            case 'off':
                //Can't turn off tabs, does nothing
                break;
        }
        return false;
    }
}

/**
 * Activate all modal htmlrapier plugin.
 */
export function activate() {
    toggles.addTogglePlugin(function (element, states, toggle) {
        if (element.getAttribute("data-toggle") === 'tab') {
            toggle = new TabStates(element, toggle);
        }

        return toggle;
    });
}