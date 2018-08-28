import { Component, OnInit } from '@angular/core';
import { Usuario } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  ocultarHijo1:boolean = true;
  ocultarHijo2:boolean = false;

  usuario:Usuario;
  constructor() { }

  ngOnInit() {
  }

  cambiarEstados(event):void{
    this.ocultarHijo1 = !this.ocultarHijo1;
    this.ocultarHijo2 = !this.ocultarHijo2;
  }

  enviarUsuario(event){
    this.usuario = event.usuario;
    this.cambiarEstados(null);
  }

  
}
