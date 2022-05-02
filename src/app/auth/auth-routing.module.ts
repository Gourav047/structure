import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routs : Routes = [
    {
        path:"",
        component:HomeComponent
    },{
        path:"sign-up",
        component:RegisterComponent
    },{
        path:"login",
        component:LoginComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]
})

export class AuthRoutingModule{}