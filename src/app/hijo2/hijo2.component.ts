import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from '../hijo/hijo.component';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {
  @Output() llamarFormulario = new EventEmitter();
  @Input() usuario:Usuario;

  constructor() { }

  ngOnInit() {
  }

  guardar(){

  }

  cancelar(){
    this.llamarFormulario.emit(null);
  }
}
