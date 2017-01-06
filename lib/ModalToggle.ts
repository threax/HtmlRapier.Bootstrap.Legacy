import * as toggles from 'hr.toggles';

export class ModalToggle extends toggles.OnOffToggle {
    get onEvent() {
        return (<any>this.states).onEvent;
    }

    get offEvent() {
        return (<any>this.states).offEvent;
    }
}