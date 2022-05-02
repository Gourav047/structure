import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FilterComponent } from './filter/filter.component';
import { UtillComponent } from './utill/utill.component';
import { FooterComponent } from './filter/footer/footer.component';
import { NavaigationMenuComponent } from './filter/navaigation-menu/navaigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FilterComponent,
    UtillComponent,
    FooterComponent,
    NavaigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
