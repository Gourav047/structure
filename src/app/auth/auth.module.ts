import { NgModule } from "@angular/core";
//import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing.module";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations:[
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
    imports:[
        CommonModule,
        AuthRoutingModule,
    ],
    providers:[]
})

export class AuthModule{}