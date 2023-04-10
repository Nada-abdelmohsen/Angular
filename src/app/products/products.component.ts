import { Component } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and Types/DiscountOffers';
import { ICategory } from '../Shared Classes and Types/ICategory';
import { IProduct } from '../Shared Classes and Types/IProduct';
import { ProductService  } from '../Services/ProductService ';
import{Router} from '@angular/router'
import{ActivatedRoute,ParamMap}from '@angular/router'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
Discount!:string;
StoreName!:string;
StoreLogo!:string;
ProductList!:IProduct[];
CategoryList!:ICategory[];
ClientName!:string;
IsPurshased!:boolean;
message!:"";
postId:any
constructor(private productService:ProductService ,private activatedRoute:ActivatedRoute,private router:Router)
{
  this.Discount="0.1";
  this.StoreName="Glasses Shop";

  this.StoreLogo="../../assets/glassesLogo.jpg";
  this.ProductList=[
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
    },
    {
      "ID":4,
      "Name":"Celia",
      "Quantity":10,
      "Price":950,
      "Img":"/../assets/Celia.PNG"
    },
    {
      "ID":5,
      "Name":"Clark",
      "Quantity":10,
      "Price":300,
      "Img":"/../assets/Clark.PNG"
    },
    {
      "ID":6,
      "Name":"Joni",
      "Quantity":10,
      "Price":400,
      "Img":"/../assets/Joni.PNG"
    },
    {
      "ID":7,
      "Name":"Kaylee",
      "Quantity":50,
      "Price":1200,
      "Img":"/../assets/Kaylee.PNG"
    },
    {
      "ID":8,
      "Name":"Marlowe",
      "Quantity":30,
      "Price":800,
      "Img":"/../assets/Marlowe.PNG"
    },
    {
      "ID":9,
      "Name":"Polegoneye",
      "Quantity":10,
      "Price":1600,
      "Img":"/../assets/Polegoneye.PNG"
    },
    {
      "ID":10,
      "Name":"TerreHaute",
      "Quantity":10,
      "Price":1300,
      "Img":"/../assets/TerreHaute.PNG"
    },
    {
      "ID":11,
      "Name":"Clark",
      "Quantity":10,
      "Price":300,
      "Img":"/../assets/Clark.PNG"
    },
    {
      "ID":12,
      "Name":"Torledo",
      "Quantity":10,
      "Price":2300,
      "Img":"/../assets/Torledo.PNG"
    },
    {
      "ID":13,
      "Name":"Troy",
      "Quantity":10,
      "Price":700,
      "Img":"/../assets/Troy.PNG"
    },
    {
      "ID":14,
      "Name":"Vera",
      "Quantity":10,
      "Price":2500,
      "Img":"/assets/Vera.PNG"
    },
  ];
  this.CategoryList=[
    {
      "ID":1,
      "Name":"Rectangle",
    },
    {
      "ID":2,
      "Name":"Round",
    },
    {
      "ID":3,
      "Name":"Cat eye",
    },
    {
      "ID":4,
      "Name":"Browline",
    },
    {
      "ID":5,
      "Name":"Polygon",
    },
  ]
  this.ClientName="Ali";
  this.IsPurshased=false;
}

ngOnInit():void
{
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
  {
    this.postId=params.get("id");
  })
}


renderValues(){
  this.productService.GetAllProducts().subscribe(
    data=>{
      this.ProductList=data;
    }
  );
  return this.ProductList
}


ProductDiscount()
{
  this.router.navigate(['products-with-discount',{id:this.activatedRoute}])
}
ProductNoDiscount(){
  this.router.navigate(['products-without-discount',{id:this.activatedRoute}])

}
showMessage()
{
 if(this.IsPurshased==true)
 {
  this.IsPurshased=false;
 }else{
  this.IsPurshased=true;
 }
}
}

