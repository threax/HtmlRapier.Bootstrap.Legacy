import * as modal from 'hr.bootstrap.modal';
import * as dropdown from 'hr.bootstrap.dropdown';
import * as tab from 'hr.bootstrap.tab';

var needsActivation = true;

/**
 * Activate all bootstrap plugins.
 */
export function activate(){
    if(needsActivation){
        needsActivation = false;

        modal.activate();
        dropdown.activate();
        tab.activate();
    }
}