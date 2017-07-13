import "hr.bootstrap";
import * as toggles from 'hr.toggles';
import * as events from 'hr.eventdispatcher';

declare var $; //Using global jquery

//Scrollbar fix, keeps scrollbars at correct length with multiple modals
//Since this is on the document, only needed once, so register here
//Works in bootstrap 3.3.7.
//Thanks to A1rPun at https://stackoverflow.com/questions/19305821/multiple-modals-overlay
$(document).on('hidden.bs.modal', '.modal', function () {
    $('.modal:visible').length && $(document.body).addClass('modal-open');
});

//Toggle Plugin
class ModalStates extends toggles.ToggleStates {
    private modal;

    constructor(element, next: toggles.IToggleStates) {
        super(next);
        this.modal = $(element);
        var theModal = this.modal.modal({
            show: false
        });

        var thisShim = this;

        this.modal.on('show.bs.modal', (e) => {
            this.fireStateChange('on');
        });
        this.modal.on('hide.bs.modal', (e) => {
            this.fireStateChange('off');
        });
        this.addState('on', 'on');
        this.addState('off', 'off');
    }

    public activateState(state): boolean {
        switch (state) {
            case 'on':
                this.modal.modal('show');
                break;
            case 'off':
                this.modal.modal('hide');
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
        if (element.classList.contains('modal')) {
            toggle = new ModalStates(element, toggle);
        }

        return toggle;
    });
}