import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  API = "https://tellevoappp.herokuapp.com/usuarios";

  constructor(private cliente: HttpClient) { }

  getAllUsuario(){

    return this.cliente.get(this.API)

  }
  
  getThisUsuario(id: string){
    return this.cliente.get(`${this.API}/${id}`);
  }

  crearUsuario(nombreUsuario : string, nombre: string, apellido: string, contrasena: string, rol: Boolean){

    return this.cliente.post(this.API, {nombreUsuario, nombre, apellido, contrasena, rol})
  }
}
