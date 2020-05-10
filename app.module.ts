import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {HttpErrorInterceptor} from './http-error.interceptor';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorServiceService } from './http-interceptor-service.service';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorServiceService,
      multi:true,
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
