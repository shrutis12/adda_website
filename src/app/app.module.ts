import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/homepage.component';
import {PostAdFormComponent} from './components/post-Ad-form/PostAdForm.component';
import {LoginFormComponent} from './components/login-form/LoginForm.component';
import {RegistrationFormComponent} from './components/registration-form/RegistrationForm.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdvertisementService} from './Services/AdServices';
import {UserProfilePageComponent} from './components/user-profile-page/UserProfilePage.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot([
    {path:'',component:HomePageComponent},
    {path:'register',component:RegistrationFormComponent},
    {path:'login',component:UserProfilePageComponent},
    {path:'logout',component:HomePageComponent},
    {path:'loginForm',component:LoginFormComponent},
    {path:'postAdForm',component:PostAdFormComponent}])],
  declarations: [ AppComponent ,HomePageComponent ,PostAdFormComponent,UserProfilePageComponent,LoginFormComponent,RegistrationFormComponent],
  bootstrap:    [ AppComponent ],
  providers:[AdvertisementService]
})
export class AppModule { }
