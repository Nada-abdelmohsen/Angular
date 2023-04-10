import { Component } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../Shared Classes and Types/post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts:any=[];
  errorMessage:string;
  url:string ="https://jsonplaceholder.typicode.com/posts"
  list:any=[];
constructor(private http:HttpClient,private postsService:PostsService,private router:Router){}

ngOnInit()
{
  this.postsService.getPosts().subscribe({
    next:data=>this.posts=data,
      error:error=>this.errorMessage=error
    }
  )
}

onSelect(post:any)
{
  this.router.navigate(['/posts',post.id]);
}

ViewComments(post:IPost){
  this.router.navigate(["comments",post.id]);
}
}
