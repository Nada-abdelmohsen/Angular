import { Component } from '@angular/core';
import {ProductService } from '../Services/ProductService ';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
products:any=[];
errorMessage:string;
constructor(private productService:ProductService ){}


  ngOnInit():void{
    //this.products=this.productService.GetAllProducts()
    
    this.productService.GetAllProducts().subscribe({
      next:data =>this.products=data,
      error:error=> this.errorMessage=error
    })
  
  }
  
  
}


