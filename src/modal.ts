import "hr.bootstrap";
import * as toggles from 'hr.toggles';
import * as events from 'hr.eventdispatcher';

declare var $;

//Toggle Plugin
class ModalStates extends toggles.ToggleStates{
    private modal;
    private openEventHander = new events.ActionEventDispatcher<any>();
    private closeEventHandler = new events.ActionEventDispatcher<any>();

    constructor(element, next) {
        super(next);
        this.modal = $(element);
        var theModal = this.modal.modal({
            show: false
        });

        var thisShim = this;

        this.modal.on('show.bs.modal', (e) => {
            thisShim.openEventHander.fire(thisShim);
        });
        this.modal.on('hide.bs.modal', (e) => {
            thisShim.closeEventHandler.fire(thisShim);
        });
        this.addState('on', 'on');
        this.addState('off', 'off');
    }

    public get onEvent() {
        return this.openEventHander.modifier;
    }

    public get offEvent() {
        return this.closeEventHandler.modifier;
    }

    public activateState(state) {
        switch (state) {
            case 'on':
                this.modal.modal('show');
                break;
            case 'off':
                this.modal.modal('hide');
                break;
        }
    }
}

/**
 * Activate all modal htmlrapier plugin.
 */
export function activate(){
    toggles.addTogglePlugin(function (element, states, toggle) {
        if (element.classList.contains('modal')) {
            toggle = new ModalStates(element, toggle);
        }

        return toggle;
    });
}