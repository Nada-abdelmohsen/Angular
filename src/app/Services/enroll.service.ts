import { Injectable } from '@angular/core';
import { User } from '../Shared Classes and Types/User';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
url:string="http://localhost:4300/register";
  constructor(private http:HttpClient) { }
  enroll(user:User)
  {
   return this.http.post(this.url,user)
  }

  getAllusers()
  {
    return this.http.get<User[]>(this.url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
      
    }));

  }
}
