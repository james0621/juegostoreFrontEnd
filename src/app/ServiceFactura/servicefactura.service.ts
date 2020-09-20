import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../Modelo/Factura';


@Injectable({
  providedIn: 'root'
})
export class ServicefacturaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/juegostore/factura';

  getClienteDocumento(documento:number){
    return this.http.get(this.Url+"/buscarCliente?documento="+documento);
  }

  createFactura(factura:Factura){
    return this.http.post<Factura>(this.Url, factura);
  }
}
