import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
    selector: 'alias-app',
    templateUrl: 'app/alias.component.html'
})
export class AliasComponent {
	@Input('myCity') strCity : string;
  	@Output('myCityChange') cityObj = new EventEmitter<string>();
	emitCity() {
	    this.cityObj.emit(this.strCity);
    }	
}  