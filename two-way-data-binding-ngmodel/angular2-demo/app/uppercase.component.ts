import {Component} from '@angular/core';
import {Employee} from './employee';
@Component({
    selector: 'upper-case-app',
    templateUrl: 'app/uppercase.component.html'
})
export class UpperCaseComponent {
	employee = new Employee(100, 'Mahesh Sharma');	
	toUpper(val:string) {
	  this.employee.name = val.toUpperCase();
	}
}  