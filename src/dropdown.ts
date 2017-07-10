import "hr.bootstrap";
import * as toggles from 'hr.toggles';
import * as events from 'hr.eventdispatcher';

declare var $;

//Toggle Plugin
class DropdownStates extends toggles.ToggleStates {
    private drop;

    constructor(element, next) {
        super(next);
        this.drop = $(element).dropdown();
        this.addState('on', 'on');
        this.addState('off', 'off');
    }

    public get onEvent() {
        return this.drop.openEvent;
    }

    public get offEvent() {
        return this.drop.closeEvent;
    }

    public activateState(state) {
        switch (state) {
            case 'on':
                if (!this.drop.isOpen()) {
                    this.drop.open();
                }
                break;
            case 'off':
                if (this.drop.isOpen()) {
                    this.drop.close();
                }
                break;
        }
    }
}

/**
 * Activate the dropdown htmlrapier plugin.
 */
export function activate(){
    toggles.addTogglePlugin(function (element, states, toggle) {
        if (element.classList.contains('dropdown-toggle')) {
            toggle = new DropdownStates(element, toggle);
        }

        return toggle;
    });
}