import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  API = "https://tellevoappp.herokuapp.com/detalles";

  constructor(private cliente: HttpClient) { }

  getAll(){

    return this.cliente.get(this.API)

  }
  
  getThis(id: string){
    return this.cliente.get(`${this.API}/${id}`);
  }

  crearViaje(nombreViaje : string, precioViaje: number, descripcionViaje: string, horaSalida:Time, cantidadPasajeros: number, urlImagen: File){

    return this.cliente.post(this.API, {nombreViaje, precioViaje, descripcionViaje, horaSalida, cantidadPasajeros, urlImagen})
  }

  eliminarViaje(id: string){
    return this.cliente.delete(`${this.API}/${id}`)
  }
  modificarViaje(id: string, post: any){

    return this.cliente.put(`${this.API}/${id}`, post)
  }
  public post(url:string, body){
    return this.cliente.post(url,body); // POST  
  }
}
