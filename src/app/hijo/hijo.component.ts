import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Output() llamarFormulario = new EventEmitter();
  @Output() enviarUsuario = new EventEmitter();

  usuario: Usuario []= [
    {'idUsuario':1234,'nombreUsuario':'andres','activo':false},
    {'idUsuario':12343,'nombreUsuario':'david','activo':false},
    {'idUsuario':1546,'nombreUsuario':'andreewe','activo':true},
  ];

  constructor() { }

  ngOnInit() {
  }

  crearUsuario(event){
    this.llamarFormulario.emit(null);
  }


  selecUsuario(id:number){
    let user:Usuario = this.usuario[id];
    this.enviarUsuario.emit({usuario:user});
    //console.log(user.nombreUsuario);
    
  }
}

export interface Usuario{
  idUsuario:number;
  nombreUsuario: String;
  activo: boolean;
}