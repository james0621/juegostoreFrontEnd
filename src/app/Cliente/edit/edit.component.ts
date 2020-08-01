import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCliente } from '../../ServiceCliente/servicecliente.service';
import { Cliente } from '../../Modelo/Cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cliente :Cliente =  new Cliente();
  constructor(private router:Router, private service:ServiceCliente) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getClienteId(+id).subscribe(data=>{
      this.cliente=data;
    });
  }

  Actualizar(cliente:Cliente){
    this.service.updateCliente(cliente)
    .subscribe(data=>{
      this.router.navigate(["cliente/listar"]);
    })
  }

}
