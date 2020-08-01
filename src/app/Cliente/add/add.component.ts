import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCliente } from '../../ServiceCliente/servicecliente.service';
import { Cliente } from '../../Modelo/Cliente';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceCliente) { }

  ngOnInit(): void {
  }
cliente:Cliente = new Cliente();
  Guardar(){
    if(this.cliente.nombre == null){
      alert("Cliente sin información nombre: " + this.cliente.nombre);
      return;
    }
    this.service.createCliente(this.cliente).subscribe(data=>{
      this.router.navigate(["cliente/listar"]);
    });
  }

}
