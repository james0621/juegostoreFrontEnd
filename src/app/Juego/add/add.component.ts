import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceJuego } from '../../ServiceJuego/servicejuego.service';
import { Juego } from '../../Modelo/Juego';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddJuegoComponent implements OnInit {

  constructor(private router:Router, private service:ServiceJuego) { }

  ngOnInit(): void {
  }
  juego:Juego = new Juego();
  Guardar(){
      this.service.createJuego(this.juego).subscribe(data=>{
      this.router.navigate(["juego/listar"]);
    });
  }

}
