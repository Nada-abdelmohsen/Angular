import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UsersService } from '../Services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
url:string ="https://jsonplaceholder.typicode.com/users"
list:any=[];
errorMessage: any;
constructor(private http:HttpClient,private userservice:UsersService){}
ngOnInit()
{
  this.userservice.getUsers().subscribe({
    next:data=>this.list=data,
    error:error=>this.errorMessage=error
})
}

}


// renderValues(){
//   this.productService.GetAllProducts().subscribe(
//     data=>{
//       this.ProductList=data;
//     }
//   );
//   return this.ProductList
// }
