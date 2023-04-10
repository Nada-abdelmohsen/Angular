import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../Shared Classes and Types/IComment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  postid!:any
  url:string="https://jsonplaceholder.typicode.com/posts/";
  errorMessage: any;
  constructor(private http:HttpClient) { }
  GetAllComments(postid:any):Observable<IComment[]>
  {
    this.postid=postid
    this.url=this.url+this.postid+"/comments";
    console.log(this.url)
    
    console.log(this.http.get<IComment[]>(this.url))
    return this.http.get<IComment[]>(this.url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
      
    }));
  }
}
