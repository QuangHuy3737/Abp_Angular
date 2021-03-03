import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {
  @Input('control') control   ;
  @Input('name-control') nameControl :string;
  constructor() { }

  ngOnInit(): void {
  }
  get message(){
    // console.log(this.control);
    for(let err in this.control.errors){
      if(this.control.dirty){
        return this.getErrorMessage(err,this.control.errors[err]);
      }
    }
   
  }
  getErrorMessage(err,value){
    let error = {
      'required' : `${this.nameControl} is required`,
      'minlength' : `Minlength : ${value.requiredLength} character`,
      'maxlength' : `Maxlength : ${value.requiredLength} character`,
      'email' : `Email invalid ! ` 

    }
    return error[err];
  }

}
