import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-test-reactive-form',
  templateUrl: './test-reactive-form.component.html',
  styleUrls: ['./test-reactive-form.component.css']
})
export class TestReactiveFormComponent implements OnInit {
  frmUser : FormGroup;
  constructor(private form : FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.frmUser = this.form.group({
      username :  ['' , Validators.required],
      password :['', Validators.required],
      fullname :['huy', [Validators.required,Validators.minLength(4), Validators.maxLength(20)]],
      email : ['',[Validators.required ,Validators.email] ]
    })
  };
  onResetForm(){
    this.frmUser.reset();

  }
  onSubmitForm(){
    console.log(this.frmUser);

  }

}
