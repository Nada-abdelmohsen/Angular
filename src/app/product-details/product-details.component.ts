import { Component } from '@angular/core';
import {ProductService } from '../Services/ProductService ';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
products:any=[];
errorMessage:string;
constructor(private productService:ProductService  ){}


ngOnInit():void
{
//this.products=this.productService.GetAllProducts();

this.productService.GetAllProducts().subscribe({
  next:data =>this.products=data,
  error:error=> this.errorMessage=error
})
}
}
