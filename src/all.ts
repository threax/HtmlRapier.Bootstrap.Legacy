import * as modal from 'hr.bootstrap.modal';
import * as dropdown from 'hr.bootstrap.dropdown';

var needsActivation = true;

/**
 * Activate all bootstrap plugins.
 */
export function activate(){
    if(needsActivation){
        needsActivation = false;

        modal.activate();
        dropdown.activate();
    }
}