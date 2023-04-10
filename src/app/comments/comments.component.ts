import { Component } from '@angular/core';
import { IComment } from '../Shared Classes and Types/IComment';
import { CommentsService } from '../Services/comments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  posttId!:any;
  commentsList!:IComment[]
    errorMessage: any;
  constructor(private CommentsService:CommentsService,private activatedRoute:ActivatedRoute){
  
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
     this.posttId=params.get("id");
    })
    
  
  
  }
  ngAfterViewInit(): void {
    
    console.log(this.posttId)
    this.CommentsService.GetAllComments(this.posttId).subscribe({
      next:data=>this.commentsList=data,
      error:error=>this.errorMessage=error
    })
    console.log(this.errorMessage)
    console.log("empty")
  
  }
}
