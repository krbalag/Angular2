import {Component, EventEmitter, Input} from '@angular/core';
@Component({
    selector: 'select-app',
    templateUrl: 'app/selectbox.component.html'
})
export class SelectBoxComponent {
	@Input() cdColors : Array<string>;
	myColor = 'GREEN';
}  