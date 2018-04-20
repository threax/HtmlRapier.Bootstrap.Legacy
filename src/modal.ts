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

class LastClickTargetManager {
    private lastOnClickTarget: any = null;

    constructor() {
        window.addEventListener("click", evt => { this.lastOnClickTarget = evt.target }, true);
    }

    public getLast(): any {
        if (this.lastOnClickTarget) {
            //Get the last click target, and clear it out, we don't care about it after the first access
            var ret = this.lastOnClickTarget;
            this.lastOnClickTarget = null;
            return ret;
        }
        return null;
    }

    public refocus(element: any) {
        if (element) {
            element.focus();
        }
        else {
            //Return main element on page
            var target = null;
            var lookup = window.document.getElementsByTagName("main");
            if (lookup.length > 0) {
                target = lookup[0];
            }

            //Couldn't find anything, use current doc body.
            if (target === null) {
                target = window.document.body;
            }
            
            if (!target.hasAttribute("tabindex")) {
                target.setAttribute("tabindex", "-1");
            }
            (<any>target).focus();
        }
    }
}

var lastClickTracker: LastClickTargetManager;

//Toggle Plugin
class ModalStates extends toggles.ToggleStates {
    private modal: any;
    private lastOnClickBeforeOpen: any;

    constructor(element, next: toggles.IToggleStates) {
        super(next);
        this.modal = $(element);
        var theModal = this.modal.modal({
            show: false
        });

        var thisShim = this;

        this.modal.on('show.bs.modal', (e) => {
            this.lastOnClickBeforeOpen = lastClickTracker.getLast();
            this.fireStateChange('on');
        });
        this.modal.on('hide.bs.modal', (e) => {
            this.fireStateChange('off');
        });
        //Only listen for tracking events if the modal is setup to do it.
        if (Boolean(element.getAttribute('data-hr-bootstrap-auto-refocus'))) {
            this.modal.on('hidden.bs.modal', (e) => {
                lastClickTracker.refocus(this.lastOnClickBeforeOpen);
            });
        }
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
    lastClickTracker = new LastClickTargetManager();

    toggles.addTogglePlugin(function (element, states, toggle) {
        if (element.classList.contains('modal')) {
            toggle = new ModalStates(element, toggle);
        }

        return toggle;
    });
}