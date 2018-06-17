import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactListService } from './services/contact-list.service';
import { AppComponent } from './app.component';
import { ViewContactDetailsComponent } from './components/view-contact-details/view-contact-details.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContactDetailsComponent,
    CreateContactComponent,
    BlankPageComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
