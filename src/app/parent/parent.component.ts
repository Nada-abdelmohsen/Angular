import { Component,OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { IProduct } from '../Shared Classes and Types/IProduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  //1
  message:string ="Hello child from parent";
  //2
  messageFromChild:IProduct[];
  //3
  @ViewChild(ChildComponent) child:ChildComponent;
  constructor(){}

  ngOnInit():void{
    //this.child.sayWelcome();
  }
  ngAfterViewInit()
  {
    this.child.sayWelcome();
  }
}

