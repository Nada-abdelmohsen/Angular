import { Component, ViewChild} from '@angular/core';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
products:any=[];
@ViewChild(ProductsComponent)child:ProductsComponent;
getData()
{
 this.products=this.child.renderValues();
}
}
