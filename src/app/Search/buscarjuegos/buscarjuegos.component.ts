import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceJuego } from '../../ServiceJuego/servicejuego.service';
import { Juego } from '../../Modelo/Juego';

@Component({
  selector: 'app-buscarjuegos',
  templateUrl: './buscarjuegos.component.html',
  styleUrls: ['./buscarjuegos.component.css']
})
export class BuscarjuegosComponent implements OnInit {

  loading : boolean;
  juegos:Juego[];
  constructor(private service:ServiceJuego, private router:Router) { }

  ngOnInit(): void {
    this.service.getJuegos().subscribe(data=>{
      this.juegos=data;
    });
  }

  buscar(termino : string){
   this.loading = true;
   if(termino.length < 1){
     this.loading = false;
   }
   this.service.getJuegosTermino(termino).subscribe((data : any)=>{
     console.log(data);
     this.juegos = data;
     this.loading=false;
   })
 }

 Alquilar(juego:Juego):void{
   localStorage.setItem("id",juego.id.toString());
   this.router.navigate(["factura/add"]);
 }

}
