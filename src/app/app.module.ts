import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FormsModule } from '@angular/forms';
//import { NgIfComponent } from './ng-if/ng-if.component';
//import { NgForComponent } from './ng-for/ng-for.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductWithoutDiscountsComponent } from './product-without-discounts/product-without-discounts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PropertyBindingComponent,
    InterpolationComponent,
   // NgIfComponent,
    //NgForComponent,
    ParentComponent,
    ChildComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponent,
    CommentsComponent,
    ProductsWithDiscountComponent,
    ProductWithoutDiscountsComponent,
    RegisterComponent,
    LoginComponent,
    LoginReactiveFormComponent,
    RegisterReactiveFormComponent,
    NoteComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
