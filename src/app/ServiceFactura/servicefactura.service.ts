import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicefacturaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8070/juegostore/factura';

  getClienteDocumento(documento:number){
    return this.http.get(this.Url+"/buscarCliente?documento="+documento);
  }
}
