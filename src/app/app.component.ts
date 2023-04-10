import { Component, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyProject';
  messageFromProduct:any;
  AllProduct:any=[];
  

ngOnInit():void
{
  
}


}
