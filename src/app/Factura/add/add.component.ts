import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceJuego} from '../../ServiceJuego/servicejuego.service';
import { ServicefacturaService} from '../../ServiceFactura/servicefactura.service';
import { Cliente } from '../../Modelo/Cliente';
import { Juego } from '../../Modelo/Juego';
import { Factura } from '../../Modelo/Factura';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddFacturaComponent implements OnInit {

  juego:Juego= new Juego();
  cliente:Cliente = new Cliente();
  factura:Factura = new Factura();
  constructor(private router:Router, private serviceJuego:ServiceJuego, private serviceFactura:ServicefacturaService) { }

  ngOnInit(): void {
    this.Alquilar();
  }

Alquilar(){
  let id= localStorage.getItem("id");
  this.serviceJuego.getJuegoId(+id).subscribe(data=>{
    this.juego=data;
  });
}

 buscarCliente(documento:number){
   this.serviceFactura.getClienteDocumento(documento).subscribe((data:any)=>{
     if(data != null){
       this.cliente = data;
     }else{
       alert("sin resultados");
     }

   });
 }

  Guardar(){
    if(this.factura != null){
      if(this.cliente != null && this.juego != null ){
        this.factura.juego = this.juego;
        this.factura.cliente = this.cliente;
        this.serviceFactura.createFactura(this.factura).subscribe(data=>{
          this.router.navigate(["alquilar/buscar"])
        });
      }else{
        alert("Cliente o juego null");
      }
    }else{
      alert("Factura null");
    }
  }

}
