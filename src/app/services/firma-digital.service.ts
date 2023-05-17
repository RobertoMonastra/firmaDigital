import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirmaDigitalService {

  nombre : string = '';
  apellido : string = '';
  puesto : string = '';
  interno : string = '';
  email : string = '';

  constructor() { }

  setNombre(valor : string){
    this.nombre = valor;
  }
  setApellido(valor : string){
    this.apellido = valor;
  }
  setPuesto(valor : string){
    this.puesto = valor;
  }
  setInterno(valor : string){
    this.interno = valor;
  }
  setEmail(valor : string){
    this.email = valor;
  }
}
