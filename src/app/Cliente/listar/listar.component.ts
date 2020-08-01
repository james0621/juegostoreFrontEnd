import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCliente } from '../../ServiceCliente/servicecliente.service';
import { Cliente } from '../../Modelo/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

clientes:Cliente[];
  constructor(private service:ServiceCliente, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe(data=>{
      this.clientes=data;
    });
  }

  Editar(cliente:Cliente):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["cliente/edit"]);
  }

  Delete(cliente:Cliente){
    this.service.deleteCliente(cliente).subscribe(data=>{
      this.clientes=this.clientes.filter(p=>p!==cliente);
    });
  }

  Nuevo(){
    this.router.navigate(["cliente/add"]);
  }

}
