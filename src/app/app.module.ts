import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

//MAterial
import{MaterialModule}from './material';
import { DialogInterfaceComponent } from './dialog-interface/dialog-interface.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo2/hijo2.component'

@NgModule({
  declarations: [
    AppComponent,
    DialogInterfaceComponent,
    PadreComponent,
    HijoComponent,
    Hijo2Component
  ],
  entryComponents: [
    DialogInterfaceComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
