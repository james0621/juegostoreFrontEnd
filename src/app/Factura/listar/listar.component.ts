import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicefacturaService } from '../../ServiceFactura/servicefactura.service';
import { Factura } from '../../Modelo/Factura';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarFacturaComponent implements OnInit {

  facturas:Factura[];
  constructor(private serviceFactura:ServicefacturaService, private router:Router) { }

  ngOnInit(): void {
    this.serviceFactura.getFacturas().subscribe(data => {
      this.facturas = data;
    });
  }

  Editar(factura:Factura):void{
    localStorage.setItem("id",factura.id.toString());
    this.router.navigate(["factura/edit"]);
  }

}
