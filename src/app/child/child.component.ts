import { Component,Input,OnInit, Output,EventEmitter } from '@angular/core';
import { IProduct } from '../Shared Classes and Types/IProduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 //@Input() parentData:any;
 products:IProduct[];
@Input("parentData") message:any;

@Output() childEvent=new EventEmitter();
constructor(){
   this.products=[
    {
      "ID":1,
      "Name":"Atlantic",
      "Quantity":10,
      "Price":500,
      "Img":"/../assets/Atlantic.PNG"
    },
    {
      "ID":2,
      "Name":"Aubrey",
      "Quantity":70,
      "Price":250,
      "Img":"/../assets/Aubrey.PNG"
    },
    {
      "ID":3,
      "Name":"Burke",
      "Quantity":15,
      "Price":370,
      "Img": "/../assets/Burke.PNG"
    }
  ]
}

GetData()
{

this.childEvent.emit(this.products);
}
sayWelcome()
{
  console.log("Welcom Parent from Child")
}

}