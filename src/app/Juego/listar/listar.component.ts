import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceJuego } from '../../ServiceJuego/servicejuego.service';
import { Juego } from '../../Modelo/Juego';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarJuegoComponent implements OnInit {

    juegos:Juego[];
    constructor(private service:ServiceJuego, private router:Router) { }

    ngOnInit(): void {
      this.service.getJuegos().subscribe(data=>{
        this.juegos=data;
      });
    }

    Editar(juego:Juego):void{
      localStorage.setItem("id",juego.id.toString());
      this.router.navigate(["juego/edit"]);
    }

    Delete(juego:Juego){
      this.service.deleteJuego(juego).subscribe(data=>{
        this.juegos=this.juegos.filter(p=>p!==juego);
      });
    }

    Nuevo(){
      this.router.navigate(["juego/add"]);
    }

}
