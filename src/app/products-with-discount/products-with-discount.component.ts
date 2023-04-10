import { Component } from '@angular/core';
import { IProduct } from '../Shared Classes and Types/product';
import { ProductService } from '../Services/ProductService ';

@Component({
  selector: 'app-products-with-discount',
  templateUrl: './products-with-discount.component.html',
  styleUrls: ['./products-with-discount.component.scss']
})
export class ProductsWithDiscountComponent {
  productList!:IProduct[]
  productWDList:IProduct[]
  
  errorMessage: any;
  result:IProduct[]
  
  

  constructor(private ProductService:ProductService){
   

  }
  ngOnInit(): void {
   
    
    this.ProductService.GetAllProducts().subscribe({
      next:data=>{this.result=data
        for(let product of this.result ) {
          if(product.discount!=="0"){
            this.productWDList.push(product);
    
          }
      
      }
      },
      error:error=>this.errorMessage=error
    })

  
  }
  ngAfterViewInit(): void {
    
    console.log(this.result.length)
    
    
  }
}
