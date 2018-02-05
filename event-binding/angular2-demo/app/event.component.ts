import {Component} from '@angular/core';
@Component({
    selector: 'event-test',
    templateUrl: 'app/event.component.html'
})
export class EventComponent {
    isValid = true;
	msg1 = 'Hello World';	
	msg2 = '';
	msg3 = '';
	setMsg(data:string) {
	    this.msg1 = data;
	}
	changeText(mytext:string) {
		this.msg3 = mytext;
    }	
} 