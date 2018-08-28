import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,MatIconModule,MatMenuModule,MatDialogModule,MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,MatIconModule,MatMenuModule,MatDialogModule,MatInputModule],
})
export class MaterialModule { } 