import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router'
import{ActivatedRoute,ParamMap}from '@angular/router'
import { IUser } from '../Shared Classes and Types/users';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl:string="https://jsonplaceholder.typicode.com/users"
  list:any=[];
  message:string
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }
  GetAllUsers()
  {
    let user={
      id:2,
      name:"Ervin Howell",
      username:"Antonette",
      email:"Shanna@melissa.tv"
    }
    this.http.post(this.userUrl,user)
  }

  getUsers():Observable<IUser[]>
{
  this.list=this.http.get<IUser[]>(this.userUrl);
  return this.list.pipe(catchError((err)=>{
    return throwError(()=>err.message || "server error");
  }))
}
}
