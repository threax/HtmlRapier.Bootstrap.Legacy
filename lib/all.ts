import * as Affix from 'hr.bootstrap.affix-native';
import * as Alert from 'hr.bootstrap.alert-native';
import * as Button from 'hr.bootstrap.button-native';
import * as Carousel from 'hr.bootstrap.carousel-native';
import * as Collapse from 'hr.bootstrap.collapse-native';
import * as Dropdown from 'hr.bootstrap.dropdown-native';
import * as Modal from 'hr.bootstrap.modal-native';
import * as Popover from 'hr.bootstrap.popover-native';
import * as ScrollSpy from 'hr.bootstrap.scrollspy-native';
import * as Tab from 'hr.bootstrap.tab-native';
import * as Tooltip from 'hr.bootstrap.tooltip-native';

var needsActivation = true;

/**
 * Activate all bootstrap plugins.
 */
export function activate(){
    if(needsActivation){
        needsActivation = false;
        Affix.activate();
        Alert.activate();
        Button.activate();
        Carousel.activate();
        Collapse.activate();
        Dropdown.activate();
        Modal.activate();
        Popover.activate();
        ScrollSpy.activate();
        Tab.activate();
        Tooltip.activate();
    }
}