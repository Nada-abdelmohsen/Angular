import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Shared Classes and Types/User';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.scss']
})
export class LoginReactiveFormComponent {
  LoginForm:FormGroup;
  email:string="";
  password:string="";
  errorMessage: any;
  userModel = new User('','','','','');
  user:any;

  constructor(private fb:FormBuilder){
    this.LoginForm=fb.group({
      email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$')]],
      password:['',[Validators.required]],
    });
}
get Email(){
  return this.LoginForm.get('email');
}
get Password(){
  return this.LoginForm.get('password');
}
submitData(){
}
}
