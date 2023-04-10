import { Component } from '@angular/core';
import { User } from '../Shared Classes and Types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string="";
  password:string="";
  errorMessage: any;
  userModel = new User('','','','','');
  user:any;
  login(){
    this.user = localStorage.getItem(this.userModel.name);
    if(this.user != null) {
    this.notify(this.userModel.name)
    console.log("vfdf")
    }

  }
  notify(name:string){
    alert("welcome "+name);
  }
}
