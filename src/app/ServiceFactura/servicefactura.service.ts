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

  getFacturas(){
    return this.http.get<Factura[]>(this.Url);
  }

  getFacturaId(id:number){
    return this.http.get<Factura>(this.Url+'/'+id);
  }

  updateFactura(factura:Factura){
    return this.http.put<Factura>(this.Url+'/'+factura.id, factura);
  }

  deleteFactura(factura:Factura){
    return this.http.delete<Factura>(this.Url+'/'+factura.id);
  }

  createFactura(factura:Factura){
    return this.http.post<Factura>(this.Url, factura);
  }
}
