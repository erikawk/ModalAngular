import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgContentModule } from './ng-content/ng-content.module';
import { ModalModule } from './ng-content/modal/modal.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
