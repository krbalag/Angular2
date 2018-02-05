import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
    selector: 'msg-app',
    templateUrl: 'app/msg.component.html'
})
export class MsgComponent {
	@Input() cdMsg : string;
  	@Output() cdMsgChange = new EventEmitter<string>();
	update(val : string) {
	    this.cdMsg = val;
	    this.cdMsgChange.emit(this.cdMsg);
    }	
}  