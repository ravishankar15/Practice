import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = ['Angular 4','React'];
  newItem = "";
  pushItem = function(){
  	if(this.newItem != ""){
  		this.items.push(this.newItem);
  		this.newItem = "";
  	}
  }

  removeItem = function(ind){
  	this.items.splice(ind, 1);
  }

}
