import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductWithoutDiscountsComponent } from './product-without-discounts/product-without-discounts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

   {path:'',redirectTo:'/products',pathMatch:'full'},
  {
    path:'products',
    component:ProductsComponent,
    children:[
      {path:'products-with-discount',component:ProductsWithDiscountComponent},
      {path:'products-without-discount',component:ProductWithoutDiscountsComponent},
      
    ]
  }, 

  {path:'products',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'loginRF',component:LoginReactiveFormComponent},
  {path:'registerRF',component:RegisterReactiveFormComponent},
  
  //{path:'**',loadChildren:()=>import("../auth/auth.module").then(m=>m.AuthModule)},
  

  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'notes',component:NoteComponent},
   {path:'comments/:id',component:CommentsComponent},
    {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

