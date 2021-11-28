import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirService {

  API = "https://tellevoappp.herokuapp.com/usuarios";

  constructor(private http: HttpClient) { }

  getImages(){
    return this.http.get(`${this.API}/download`)

  }

  uploadImages(name: string, file: File){
    const form = new FormData

  }
}
