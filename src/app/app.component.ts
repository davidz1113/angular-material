import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogInterfaceComponent } from './dialog-interface/dialog-interface.component';

export interface DialogData {
  nombreUser: string;
  respuesta: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  respuesta: string;
  nombreUser: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInterfaceComponent, {
      width: '250px',
      data: {nombreUser: this.nombreUser, respuesta: this.respuesta}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.respuesta = result;
    });
  }
 

}

