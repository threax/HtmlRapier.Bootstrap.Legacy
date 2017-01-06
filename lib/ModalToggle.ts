import * as toggles from 'hr.toggles';

export class ModalToggle extends toggles.OnOffToggle {
    get onEvent() {
        return (<any>this.toggle).onEvent;
    }

    get offEvent() {
        return (<any>this.toggle).offEvent;
    }
}