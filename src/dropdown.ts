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
    }

    public activateState(state) {
        //States not supported, handled by bootstrap
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