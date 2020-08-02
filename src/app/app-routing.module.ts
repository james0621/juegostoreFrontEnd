import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AddComponent } from './Cliente/add/add.component';
import { EditComponent } from './Cliente/edit/edit.component';
import { ListarJuegoComponent } from './Juego/listar/listar.component';
import { AddJuegoComponent } from './Juego/add/add.component';
import { EditJuegoComponent } from './Juego/edit/edit.component';
import { ListarFacturaComponent } from './Factura/listar/listar.component';
import { AddFacturaComponent } from './Factura/add/add.component';
import { EditFacturaComponent } from './Factura/edit/edit.component';
import { BuscarjuegosComponent } from './Search/buscarjuegos/buscarjuegos.component';

const routes: Routes = [
  {path:'cliente/listar', component:ListarComponent},
  {path:'cliente/add',component:AddComponent},
  {path:'cliente/edit',component:EditComponent},
  {path:'juego/listar', component:ListarJuegoComponent},
  {path:'juego/add',component:AddJuegoComponent},
  {path:'juego/edit',component:EditJuegoComponent},
  {path:'factura/listar', component:ListarFacturaComponent},
  {path:'factura/add',component:AddFacturaComponent},
  {path:'factura/edit',component:EditFacturaComponent},
  {path:'alquilar/buscar',component:BuscarjuegosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
