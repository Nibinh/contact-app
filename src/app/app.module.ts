import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import{ HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactManagerComponent,
    AddcontactComponent,
    UpdatecontactComponent,
    ViewcontactComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
