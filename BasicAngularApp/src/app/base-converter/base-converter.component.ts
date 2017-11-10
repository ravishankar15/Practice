import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-base-converter',
  templateUrl: './base-converter.component.html',
  styleUrls: ['./base-converter.component.css']
})
export class BaseConverterComponent implements OnInit {

  constructor() { }

  form;
  ngOnInit() {
  	this.form = new FormGroup({
  		decimal: new FormControl(""),
  		binary: new FormControl(""),
  		octal: new FormControl(""),
  		hexa: new FormControl("")

  	})
  }


  decimalChanged = function(oldValue, newValue){
  	if(newValue != ""){
  		this.form.patchValue({binary: parseInt(newValue, 10).toString(2)});
	  	this.form.patchValue({octal: parseInt(newValue, 10).toString(8)});
	  	this.form.patchValue({hexa: parseInt(newValue, 10).toString(16).toUpperCase()});
	  } else {
	  	this.form.patchValue({binary: ""});
	  	this.form.patchValue({octal: ""});
	  	this.form.patchValue({hexa: ""});
	  }
  }

  flag = 0;
  binaryChanged = function(oldValue, newValue){
  	this.flag = this.flag + 1;
  	if(this.flag == 1){
		if(newValue != ""){
			this.form.patchValue({decimal: parseInt(newValue, 2).toString(10)});
	 	} else {
			this.form.patchValue({decimal: ""});
		}
		this.flag = 0;
  	}
  }

  octalChanged = function(oldValue, newValue){
  	this.flag= this.flag + 1
  	if(this.flag == 1){
  		if(newValue != ""){
	  		this.form.patchValue({decimal: parseInt(newValue, 8).toString(10)});
		  } else {
		  	this.form.patchValue({decimal: ""});
		  }
	  this.flag = 0;
  	}
  }

  hexaChanged = function(oldValue, newValue){
  	this.flag = this.flag + 1;
  	if(this.flag == 1){
  		if(newValue != ""){
	  		this.form.patchValue({decimal: parseInt(newValue, 16).toString(10)});
		  } else {
		  	this.form.patchValue({decimal: ""});
		  }
	  this.flag = 0;
  	}
  }

}
