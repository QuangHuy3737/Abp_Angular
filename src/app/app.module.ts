import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ResultComponent } from './result/result.component';
import { ResetComponent } from './reset/reset.component';
import { SizeSettingComponent } from './size-setting/size-setting.component';
import {TestReactiveFormComponent} from'./test-reactive-form/test-reactive-form.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ErrorValidateComponent } from './error-validate/error-validate.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from'@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule ,Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import {AuthGuard} from './services/guards/auth.guard';
import {AccessGuard} from './services/guards/access.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
const appRoutes : Routes= [
  {
    path : '',
    redirectTo : '/index',
    pathMatch : 'full'
  },
  
  {
    path : 'index',
    component : HomeComponent,
    canDeactivate :[AccessGuard]
  },
  // {
  // path : 'product',
  // component : ProductComponent
  // },
   {
    path : 'productDetail/:id',
    canActivate : [AuthGuard],
    component : ProductDetailsComponent
    },
  
  {
    path :'product',
    canActivate : [AuthGuard],
    component : ProductComponent
    
  },
  
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'login',
    component : LogInComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ResultComponent,
    ResetComponent,
    SizeSettingComponent,
    TestReactiveFormComponent,
    ErrorValidateComponent,
    ProductComponent,
    FilterPipe,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    LogInComponent,
    ProductDetailsComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    AuthGuard,
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
