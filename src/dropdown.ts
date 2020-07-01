import * as toggles from 'htmlrapier/src/toggles';
import * as events from 'htmlrapier/src/eventdispatcher';

declare var $;

//Toggle Plugin
class DropdownStates extends toggles.ToggleStates {
    private drop;

    constructor(element, next) {
        super(next);
        this.drop = $(element).dropdown();
    }

    public activateState(state): boolean {
        //States not supported, handled by bootstrap
        return false; //Never fire any events for this toggle
    }
}

/**
 * Activate the dropdown htmlrapier plugin.
 */
export function activate() {
    toggles.addTogglePlugin(function (element, states, toggle) {
        if (element.classList.contains('dropdown-toggle')) {
            toggle = new DropdownStates(element, toggle);
        }

        return toggle;
    });
}