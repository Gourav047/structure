import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "../app-routing.module";
import { NavaigationMenuComponent } from './navaigation-menu/navaigation-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavaigationMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})

export class FilterModule { }