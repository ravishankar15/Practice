import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  constructor() { }

  form;
  ngOnInit() {
  	this.form = new FormGroup({
  		firstname: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
  		lastname: new FormControl(""),
  		language: new FormControl("")
  	});

  }

  /*textValidation(control){
    if(control.value.length < 3){
      return {'lastname': true};
    }
  }*/

  onSubmit = function(user){
  	console.log(user);
  }

}
