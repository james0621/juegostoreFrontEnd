import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceJuego} from '../../ServiceJuego/servicejuego.service';
import { Juego } from '../../Modelo/Juego';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditJuegoComponent implements OnInit {

  juego :Juego =  new Juego();
  constructor(private router:Router, private service:ServiceJuego) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getJuegoId(+id).subscribe(data=>{
      this.juego=data;
    });
  }

  Actualizar(juego:Juego){
    this.service.updateJuego(juego)
    .subscribe(data=>{
      this.router.navigate(["juego/listar"]);
    })
  }

}
