import { Component } from '@angular/core';
import { User } from 'src/app/Shared Classes and Types/User';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
contact=["facebook","twitter","google"];
users:any=[];
// userModel=new User("Ali","Ali@gmail.com","1234","1234","facebook")
userModel=new User("","","","","");
constructor(private enrollService:EnrollService){}
ngOnInit(): void {
    
}
submitData(){
this.enrollService.enroll(this.userModel).subscribe({
  next:data=>console.log(data),
  error:error=>console.log(error)
});
localStorage.setItem(this.userModel.name,JSON.stringify(this.userModel));

}
}
