import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../Shared Classes and Types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  _url:string="/assets/Data/products.json";
  message: any;
 products:any=[]
  constructor(private http:HttpClient) {}
GetAllProducts():Observable<IProduct[]>
{
     return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
     return throwError(()=>err.message || "server error")
     }));
};
product:any=this.GetAllProducts();

GetProductById(id:number){
  this.GetAllProducts().subscribe(
        productData=>{
         this.products=productData;
       },
       error=>{
         this.message=error;
   } )
   for(var item of this.products){
    if(item.ID===id){
      return item
    }
   }
   return null ;
  
}
}
