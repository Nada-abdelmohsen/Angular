import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../Shared Classes and Types/product';
import { ProductService } from '../Services/ProductService ';
import { Namevalidation } from '../customerValidation/NameValidation';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  NotesForm:FormGroup;
  ProductList:IProduct[]=[];
  checkedvalue:boolean=false;
  productdiscount:number=0;
  productname:string='';
  errorMessage: any;
  constructor(private fb:FormBuilder,public productservice:ProductService){
    this.NotesForm=this.fb.group({
      name:['',[Validators.required,Namevalidation(/admin|adminstrator/)]],
      product:[''],
      checkdiscount:[''],
      discount :[''],
      comment:[''],
      aleternativecomment:this.fb.array([])
    });


  }

  ngOnInit() {
    this.productservice.GetAllProducts().subscribe({
      next:data=>this.ProductList=data,
      error:error=>this.errorMessage=error
    })
   
  }
  
  addAlternativecomment(){
    this.aleternativeComment.push(this.fb.control(''));
  }
  deletecomment(index:any){
    this.aleternativeComment.removeAt(index);

  }
  setDiscountValidation(){
    this.NotesForm.get('checkdiscount')?.valueChanges.subscribe(checkedValue=>{
      this.checkedvalue=checkedValue;
      if(checkedValue)
      {
        this.Discount?.setValidators(Validators.required);
      }
      else
      {
       this.Discount?.clearValidators();
      }
      //upadte dom
      this.Discount?.updateValueAndValidity();
    })
  }
  get Name(){
    return this.NotesForm.get('name');
  }
  get Discount()
  {
    return this.NotesForm.get('discount');
  }

  get Comment()
  {
    return this.NotesForm.get('comment');
  }

  get Product()
  {
    return this.NotesForm.get('product');
  }

  get aleternativeComment()
  {
    return this.NotesForm.get('aleternativecomment') as FormArray;
  }
  submitData(){

  }
}
