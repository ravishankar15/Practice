import { Component } from '@angular/core';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Getting the values from the service
  constructor(private service: AppserviceService){}

  title = 'app';
  obj = this.service.obj;

  arrAlpha = this.service.arrAlpha
  arrNum = this.service.arrNum;
  arrNumValue = this.service.arrNumValue;
  isTrue = this.service.isTrue;

  day = this.service.day;

  jsonData = this.service.fetchData();

  /*obj = {
  	id: "1",
  	name: "Ravishankar"
  }

  arrAlpha = ['abc', 'def', 'ghi'];
  arrNum = ['One','Two', 'Three'];
  arrNumValue = [3,5,6,1];
  isTrue = true; 

  day = new Date(1992, 3, 15);*/
}
