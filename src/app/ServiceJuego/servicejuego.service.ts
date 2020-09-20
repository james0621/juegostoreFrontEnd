import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from '../Modelo/Juego';

@Injectable({
  providedIn: 'root'
})
export class ServiceJuego {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/juegostore/juego';

  getJuegos(){
    return this.http.get<Juego[]>(this.Url);
  }

  createJuego(juego:Juego){
    return this.http.post<Juego>(this.Url, juego);
  }

  getJuegoId(id:number){
    return this.http.get<Juego>(this.Url+'/'+id);
  }

  updateJuego(juego:Juego){
    return this.http.put<Juego>(this.Url+"/"+juego.id,juego);
  }

  deleteJuego(juego:Juego){
    return this.http.delete<Juego>(this.Url+"/"+juego.id);
  }

  getJuegosTermino(termino:string){
    return this.http.get<Juego[]>(this.Url+"/buscarJuego?termino="+termino);
  }
}
