import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-dialog-interface',
  templateUrl: './dialog-interface.component.html',
  styleUrls: ['./dialog-interface.component.css']
})

export class DialogInterfaceComponent implements DialogData{
  respuesta: string;
  nombreUser: string;
  

  constructor(
    public dialogRef: MatDialogRef<DialogInterfaceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
      this.nombreUser=data['nombreUser'];
      this.respuesta=data['respuesta'];
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}
