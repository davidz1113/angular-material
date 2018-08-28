import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

//MAterial
import{MaterialModule}from './material';
import { DialogInterfaceComponent } from './dialog-interface/dialog-interface.component'

@NgModule({
  declarations: [
    AppComponent,
    DialogInterfaceComponent
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
