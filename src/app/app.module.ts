import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AddComponent } from './Cliente/add/add.component';
import { EditComponent } from './Cliente/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceCliente } from '../app/ServiceCliente/servicecliente.service';
import { ListarJuegoComponent } from './Juego/listar/listar.component';
import { AddJuegoComponent } from './Juego/add/add.component';
import { EditJuegoComponent } from './Juego/edit/edit.component';
import { ServiceJuego } from '../app/ServiceJuego/servicejuego.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarJuegoComponent,
    AddJuegoComponent,
    EditJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceCliente,
    ServiceJuego
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
