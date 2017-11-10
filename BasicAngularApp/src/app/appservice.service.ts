import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppserviceService {

  constructor(private http: Http) { }


  fetchData() {
  		return this.http.get('assets/students.json').map(
  			(response) => response.json()
  		).subscribe(
  			(data) => console.log(data)
  		)
  }

  obj = {
  	id: "1",
  	name: "Ravishankar"
  }

  arrAlpha = ['abc', 'def', 'ghi'];
  arrNum = ['One','Two', 'Three'];
  arrNumValue = [3,5,6,1];
  isTrue = true; 

  day = new Date(1992, 3, 15);

}
