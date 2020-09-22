import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicefacturaService } from '../../ServiceFactura/servicefactura.service';
import { Factura } from '../../Modelo/Factura';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditFacturaComponent implements OnInit {

  factura : Factura = new Factura();
  constructor(private router:Router, private serviceFactura:ServicefacturaService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.serviceFactura.getFacturaId(+id).subscribe(data =>{
      this.factura = data;
    });
  }

}
