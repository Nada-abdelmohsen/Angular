import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../Shared Classes and Types/post';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl:string="https://jsonplaceholder.typicode.com/posts"
  list:any=[];
  message:string
  constructor(private http:HttpClient) { }
getAllPosts()
{
  let post={
    
    userId:1,
    title:"this is title",
    body:"this is body"
  }
  this.http.post(this.postUrl,post)
}
getPosts():Observable<IPost[]>
{
  this.list=this.http.get<IPost[]>(this.postUrl);
  return this.list.pipe(catchError((err)=>{
    return throwError(()=>err.message || "server error");
  }))
}
// GetAllProducts()
// {

//      return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
//      return throwError(()=>err.message || "server error")
//      }));
// }
}
