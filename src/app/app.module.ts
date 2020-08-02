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
import { ListarFacturaComponent } from './Factura/listar/listar.component';
import { AddFacturaComponent } from './Factura/add/add.component';
import { EditFacturaComponent } from './Factura/edit/edit.component';
import { ServicefacturaService } from '../app/ServiceFactura/servicefactura.service';
import { HttpClientModule } from '@angular/common/http';
import { BuscarjuegosComponent } from './Search/buscarjuegos/buscarjuegos.component';
import { LoadingComponent } from './shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarJuegoComponent,
    AddJuegoComponent,
    EditJuegoComponent,
    ListarFacturaComponent,
    AddFacturaComponent,
    EditFacturaComponent,
    BuscarjuegosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceCliente,
    ServiceJuego,
    ServicefacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
