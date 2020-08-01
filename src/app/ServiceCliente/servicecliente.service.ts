import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceCliente {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8070/juegostore/cliente';

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }

  createCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.Url, cliente);
  }

  getClienteId(id:number){
    return this.http.get<Cliente>(this.Url+'/'+id);
  }

  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.id,cliente);
  }

  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.id);
  }
}
