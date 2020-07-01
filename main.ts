import * as modal from './src/modal';
import * as dropdown from './src/dropdown';
import * as tab from './src/tab';

modal.activate();
dropdown.activate();
tab.activate();

export function setup() {
    //Does not do anything, but makes module work
    return true;
}