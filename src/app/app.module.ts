import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';

import {ImageModule} from 'primeng/image';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
